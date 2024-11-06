---
title: Docs Style Guide
hide:
  - toc
---

## Documentation Style Guide

This document defines the standards for UI Lovelace Minimalist Documentation.

- Rather than repeating information from another topic, link to the single source of truth and explain why it is important.

**Include all media types**

Include any media types/sources if the content is relevant to readers. You can freely include or link presentations, diagrams, and videos. No matter who it was originally composed for, if it is helpful to any of our audiences, we can include it.

- If you use an image that has a separate source file (for example, a vector or diagram format), link the image to the source file so that it may be reused or updated by anyone.

### Structure

| Directory     | Contents                                            |
|---------------|-----------------------------------------------------|
|`docs/index.md`| Home Page.                                          |
|`docs/assets`  | Can contain images/javascript/stylesheets.          |
|`docs/setup`   | Guides on how to setup the  UI Lovelace Minimalist. |
|`docs/usage`   | Guides on how to use UI Lovelace Minimalist.        |

#### Work with directories and files

When working with directories and files:

1. When you create a new directory, always start with an `index.md` file. Don't use another filename and do not create `README.md` files.
2. Do not use special characters and spaces, or capital letters in file names, directory names, branch names, and anything that generates a path.
3. When creating or renaming a file or directory and it has more than one word in its name, use underscores (_) instead of spaces or dashes. For example, proper naming would be import_project/import_from_github.md. This applies to both image files and Markdown files.
4. For image files, do not exceed 100KB.
5. Do not include the same information in multiple places.

If you’re unsure where to place a document or a content addition, this shouldn’t stop you from authoring and contributing. Use your best judgment, and then ask the reviewer of your MR to confirm your decision.

### Card page

Create a Card Page by checking the `._example.md` in the cards directory. This can be used as a structure to build upon.

### Images

Images, including screenshots, can help a reader better understand a concept. However, they should be used sparingly because:

- They tend to become out-of-date.
- They are difficult and expensive to localize.
- They cannot be read by screen readers.

#### Save the image

- Place all images in the central asset directory named `assets/img/` inside the docs root folder.
- Consider using PNG images instead of JPEG.
- Compress GIFs with https://ezgif.com/optimize or similar tool.
- Images should be used (only when necessary) to illustrate the description of a process, not to replace it.

#### Add the image link to content

The Markdown code for including an image in a document is `![Image description which will be the alt tag](../../assets/img/ulm_cards/example.png)`

### Admonitions / Call-outs

Admonitions, also known as call-outs, are an excellent choice for including side content without significantly interrupting the document flow. More information of this can be found on Upstream documentation of MkDocs: [Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#admonitions)

### Code Blocks

Code blocks and examples are an essential part of technical project documentation. ULM Docs provides different ways to set up syntax highlighting for code blocks. For a more advanced usage of Code Blocks like adding Annations, Line Numbers, Highlighting, Embedding external files see the [Code Blocks page on mkdocs-material](https://squidfunk.github.io/mkdocs-material/reference/code-blocks/#usage).

## Developing

Run local:

```bash
pip install -r requirements.txt

mkdocs serve

# or
mkdocs serve --dirtyreload
```

## Markdown linting

Can be done automatically by running pre-commit

```bash
pre-commit run markdownlint
```
