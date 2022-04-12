# Contributing to UI Lovelace Minimalist

>This is a living project and all input is very welcome! If you configured and designed  a card, that you would like to share, please feel free to do so! We are happy to include your contribution so others can use it as well!

The following is a set of guidelines to contribute to the Minimalist 'theme'. You are always free to open an Issue or to make a PR to fix a bug, add a card or add enhancements.

## Pull Requests

For Pull Requeste we use for now two branches:

- [`main`](https://github.com/UI-Lovelace-Minimalist/UI)
- [`release`](https://github.com/UI-Lovelace-Minimalist/UI/tree/release)

Both branches handle different types of pull requests. <br>

The `main` branch is for pull requests related to "Custom-cards" and bugfixes/adaptations of documentation files. <br>

The `release` branch is for all HACS-release related requests.
These are mostly adaptations and or bugfixes to official cards and their documentation. It also includes changes in workflows related to the HACS integration.

All pull requests need to be checked and approved by at least one admin.

You can find [here](https://ui-lovelace-minimalist.github.io/UI/development/custom_cards/) instructions to develop your own "Custom-cards".

## Guidelines

All the YAML and documentation files need to follow some guidelines to provide consistency.
These are the most important *guidelines*, click [here](https://ui-lovelace-minimalist.github.io/UI/development/custom_cards/) for the wiki.

### Style and Qualtiy guidelines

- Your file needs to satisfy some guidelines to assure your card is easy to read and looks like all the other files in the repository.
    1. Each file needs to start only with `---` on the first line.
    2. Each file needs to end with a empty code line.
    3. All strings need to be `"double-quoted"`.
    4. Only use `lowercase` in your code.
    5. No trailing white-space (No random space between and around the code).
    6. A line-length of 256.
    7. **IMPORTANT!** Unix-style line endings. (It's recommended to use a code-editor like VSCode and set CRLF to LF)
![example-image](../docs/assets/img/unix_line_endings.png)

- More advanced users can make use of Pre-commit to apply most of the styles automatically.
    1. Open your fork in a code-editor like VSCode.
    2. Install [Pre-commit](https://pre-commit.com/) (Linux or Mac-system recommended).
    3. All the needed hooks are available within the repository.
    4. After your changes run `pre-commit run --all-files` in the terminal of your editor.
    5. You could test your card in a dev-environment with the use of [Docker-desktop](https://www.docker.com/products/docker-desktop).
    6. Make sure you read https://github.com/UI-Lovelace-Minimalist/UI/blob/dev/.devcontainer/README.md
