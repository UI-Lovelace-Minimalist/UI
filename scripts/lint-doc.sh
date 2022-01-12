#!/usr/bin/env bash
set -o pipefail

cd "$(dirname "$0")/.." || exit 1
echo "=> Linting documents at path $(pwd) as $(whoami)..."
echo
ERRORCODE=0

# Do not use dashes (-) in directory names, use underscores (_) instead.
# Number of directories with dashes as of 2021-12-13
# only images folder in legacy_docs
NUMBER_DASHES=0
FIND_DASHES=$(find docs -type d -name "*-*" | wc -l)
echo '=> Checking for directory names containing dashes...'
echo
if [ ${FIND_DASHES} -ne $NUMBER_DASHES ]
then
  echo
  echo '  ✖ ERROR: The number of directory names containing dashes has changed. Use underscores instead of dashes for the directory names.' >&2
  echo '  ✖        If removing a directory containing dashes, update NUMBER_DASHES in lint-doc.sh.' >&2
  echo '  https://sre-docs-v2.takeaway.com/team/style-guide/#work-with-directories-and-files'
  echo
  ((ERRORCODE++))
fi


# Run Markdownlint only on changed files. Only works on merged results
# pipelines, so first checks if a merged results CI variable is present. If not present,
# runs test on all files.
if [ -z "${CI_MERGE_REQUEST_TARGET_BRANCH_SHA}" ]
then
  MD_DOC_PATH=${MD_DOC_PATH:-docs}
  echo "Merge request pipeline (detached) detected. Testing all files."
else
  MERGE_BASE=$(git merge-base ${CI_MERGE_REQUEST_TARGET_BRANCH_SHA} ${CI_MERGE_REQUEST_SOURCE_BRANCH_SHA})
  if git diff --diff-filter=d --name-only "${MERGE_BASE}..${CI_MERGE_REQUEST_SOURCE_BRANCH_SHA}" | grep -E "\.markdownlint|lint-doc\.sh"
  then
    MD_DOC_PATH=${MD_DOC_PATH:-doc}
    echo "Markdownlint, or lint-doc.sh configuration changed. Testing all files."
  else
    MD_DOC_PATH=$(git diff --diff-filter=d --name-only "${MERGE_BASE}..${CI_MERGE_REQUEST_SOURCE_BRANCH_SHA}" -- 'docs/*.md')
    if [ -n "${MD_DOC_PATH}" ]
    then
      echo -e "Merged results pipeline detected. Testing only the following files:\n${MD_DOC_PATH}"
    fi
  fi
fi

function run_locally_or_in_docker() {
  local cmd=$1
  local args=$2

  if hash ${cmd} 2>/dev/null
  then
    $cmd $args
  elif hash docker 2>/dev/null
  then
    docker run -t -v ${PWD}:/gitlab -w /gitlab --rm registry.gitlab.com/gitlab-org/gitlab-docs/lint-markdown:alpine-3.14-vale-2.12.0-markdownlint-0.29.0 ${cmd} ${args}
  else
    echo
    echo "  ✖ ERROR: '${cmd}' not found. Install '${cmd}' or Docker to proceed." >&2
    echo
    ((ERRORCODE++))
  fi

  if [ $? -ne 0 ]
  then
    echo
    echo "  ✖ ERROR: '${cmd}' failed with errors." >&2
    echo
    ((ERRORCODE++))
  fi
}

echo ${MD_DOC_PATH}

echo '=> Linting markdown style...'
echo
if [ -z "${MD_DOC_PATH}" ]
then
  echo "Merged results pipeline detected, but no markdown files found. Skipping."
else
  run_locally_or_in_docker 'markdownlint' "-i docs/legacy_docs --config .markdownlint.yml ${MD_DOC_PATH}"
fi

if [ $ERRORCODE -ne 0 ]
then
  echo "✖ ${ERRORCODE} lint test(s) failed. Review the log carefully to see full listing."
  exit 1
else
  echo "✔ Linting passed"
  exit 0
fi