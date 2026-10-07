# language-kdl

KDL language support.

## Features

- **Grammars**: provides Tree-sitter grammars, built from [tree-sitter-kdl](https://github.com/tree-sitter-grammars/tree-sitter-kdl).
- **Syntax highlighting**: KDL 1 and KDL 2 nodes, arguments, properties, type annotations, raw and multiline strings, and slash-dash comments.
- **Folding**: folds child blocks.
- **Locals**: resolves node and property names.

## Installation

To install `language-kdl` search for it in the Install pane of the Lumine settings, or run the command `lumine --install lumine-code/language-kdl`.

## Injections

- Static Tree-sitter injections highlight URLs with `language-hyperlink`.
- Static Tree-sitter injections highlight comment markers with `language-todo`.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
