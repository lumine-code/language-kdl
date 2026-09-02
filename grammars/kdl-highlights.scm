; Types

(node (identifier) @support.type.kdl)

(type) @support.type.kdl

(annotation_type) @support.type.builtin.kdl

; Properties

(prop (identifier) @variable.other.member.kdl)

; Variables

(identifier) @variable.other.kdl

; Operators
[
 "="
 "+"
 "-"
] @keyword.operator.kdl

; Literals

(string) @string.quoted.double.kdl

(escape) @constant.character.escape.kdl

(number) @constant.numeric.kdl

(number (decimal) @constant.numeric.float.kdl)
(number (exponent) @constant.numeric.float.kdl)

(boolean) @constant.language.boolean.kdl

"null" @constant.language.kdl

; Punctuation

"{" @punctuation.definition.children.begin.bracket.curly.kdl
"}" @punctuation.definition.children.end.bracket.curly.kdl

"(" @punctuation.definition.annotation.begin.bracket.round.kdl
")" @punctuation.definition.annotation.end.bracket.round.kdl

";" @punctuation.terminator.node.kdl

; Comments

[
  (single_line_comment)
  (multi_line_comment)
] @comment.line.kdl @_IGNORE_.spell

(node (node_comment) ) @comment.line.kdl
(node (node_field (node_field_comment) ) @comment.line.kdl)
(node_children (node_children_comment) ) @comment.line.kdl
