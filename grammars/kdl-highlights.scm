; Types

(node (identifier) @support.type.kdl)

(type) @support.type.kdl

((type name: (identifier) @support.type.builtin.kdl)
  (#any-of? @support.type.builtin.kdl
    "i8" "i16" "i32" "i64" "i128" "u8" "u16" "u32" "u64" "u128"
    "isize" "usize" "f32" "f64" "decimal64" "decimal128"
    "date-time" "time" "date" "duration" "decimal" "currency"
    "country-2" "country-3" "country-subdivision" "email" "idn-email"
    "hostname" "idn-hostname" "ipv4" "ipv6" "url" "url-reference"
    "irl" "irl-reference" "url-template" "uuid" "regex" "base64" "base85"))

; Properties

(prop (identifier) @variable.other.member.kdl)

; Variables

(identifier) @variable.other.kdl

; Operators
"=" @keyword.operator.kdl

; Literals

(string) @string.quoted.double.kdl
(multi_line_string) @string.quoted.triple.kdl

(escape) @constant.character.escape.kdl
(escaped_whitespace) @constant.character.escape.kdl

(number) @constant.numeric.kdl
(keyword_number) @constant.numeric.kdl

(number (decimal) @constant.numeric.float.kdl)
(number (exponent) @constant.numeric.float.kdl)

(boolean) @constant.language.boolean.kdl

["null" "#null"] @constant.language.kdl

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
  (version)
] @comment.line.kdl @_IGNORE_.spell

(node_comment) @comment.line.kdl
(node_field_comment) @comment.line.kdl
(node_children_comment) @comment.line.kdl
