; String and comment contents are data, including their whitespace.
([(string) (multi_line_string) (multi_line_comment)] @preserve
  (#is? indent.reindent true)
  (#is-not? indent.matchesCurrentRow startPosition)
  (#set! indent.force true))

; The delimiters carry the indent; every block in this language is braced.
"{" @indent

"}" @dedent
