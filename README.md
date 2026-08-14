# language-kdl

KDL language support.

## Features

- **Grammars**: provides Tree-sitter grammars, built from [tree-sitter-kdl](https://github.com/tree-sitter-grammars/tree-sitter-kdl).
- **Syntax highlighting**: nodes, arguments, properties, type annotations and the slash-dash comment forms.
- **Folding**: folds child blocks.
- **Locals**: resolves node and property names.

## Installation

To install `language-kdl` search for it in the Install pane of the Lumine settings, or run the command `lumine --install lumine-code/language-kdl`.

## Services

- `hyperlink.injection`: consumed to highlight URLs in these files as clickable links.
- `todo.injection`: consumed to highlight `TODO`-style markers inside comments.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
