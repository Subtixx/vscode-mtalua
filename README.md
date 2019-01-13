<p align="center">
    <img alt="vscode-mta-sa-lua-logo" src="https://github.com/Subtixx/vscode-mtalua/raw/master/images/logo.png">
</p>

<p align="center">
    <img src="https://img.shields.io/maintenance/yes/2019.svg?style=flat-square">
</p>

<h3 align="center">
  MTA:SA Lua
</h3>

<p align="center">
    MTA:SA Lua is a VS Code extension to add syntax highlighting, code completion and other useful functions for MTA San Andreas LUA to VS Code.
</p>

<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=subtixx.mtasa-lua"><img src="https://img.shields.io/vscode-marketplace/v/subtixx.mtasa-lua.svg?style=flat-square" /></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=subtixx.mtasa-lua"><img src="https://img.shields.io/vscode-marketplace/d/subtixx.mtasa-lua.svg?style=flat-square" /></a>
<p/>


# Table of contents

- [Table of contents](#table-of-contents)
- [Preview Images](#preview-images)
    - [Code Completion](#code-completion)
    - [Syntax Highlighting](#syntax-highlighting)
        - [Server only Function](#server-only-function)
        - [Client only Function](#client-only-function)
        - [Shared Function](#shared-function)
    - [Generate Files and Manage resources](#generate-files-manage-resources)
    - [VSDark](#vsdark)
        - [Server](#server)
        - [Client](#client)
    - [Monokai (Unsupported)](#monokai-unsupported)
- [Changelog](#changelog)
- [References](#references)

# Preview Images

## Code Completion

![CodeCompletion](images/CodeCompletion.gif)

## Syntax Highlighting

### Server only Function

![Server Function](images/Preview_ServerFunc.png)

### Client only Function

![Server Function](images/Preview_ClientFunc.png)

### Shared Function

![Server Function](images/Preview_SharedFunc.png)

## Generate files Manage resources

![Generate Files](images/Preview_GenerateFiles.png)

![Generated Meta](images/Preview_GeneratedMeta.png)

## VSDark

### Server

![Server Syntax Highlighting](images/PreviewServer_SyntaxHighlight.png)

### Client

![Client Syntax Highlighting](images/PreviewClient_SyntaxHighlight.png)

## Monokai (Unsupported)

![Monokai](images/Monokai.png)

# Changelog

## v2.3.2 (13. Jan 2019)

- Added ability to only show relevant functions (Serverside only functions will only display in server lua files)
- Removed duplicated functions
- Scriptside will now show in completion items

## v2.3.1 (11. Jan 2019)

- Added 1.5.6 functions and deprecations
- Search hinting for new resource manager
- Added verification if resource exists

## v2.3.0 (9. Jan 2019)

- Added resource manager to start/stop/restart resources
- Fixed existing files in generate classes will break extension
- Fixed some missing information in some functions

## v2.2.5 (8. Jan 2019)

- Added more settings
- Added the ability to modify existing meta files
- Added the ability to customize file extensions, file prefix/suffixes
- Added the ability to turn off watermarking
- Fixed generating client files
- Fixed extension upload

## v2.2.0 (7. Jan 2019)

- Added the ability to create meta/client/server files on the fly

# References
- Thanks to 50p for the sublime text syntax highlighter. Which inspired me to create the VSCode extension.