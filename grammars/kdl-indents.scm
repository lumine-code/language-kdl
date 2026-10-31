; The scanner may omit an unfinished raw-string prefix from the error tree.
((ERROR "{" @_IGNORE_) @_error
  (#is? test.last true)
  (#match? @_error "(#+)\"(?:(?!\"\\1)[^\\r\\n])*\\{[ \\t\\r\\n]*$")
  (#set! capture.final true))

; String and comment contents are data, including their whitespace.
([(string) (multi_line_string) (multi_line_comment)] @preserve
  (#is? indent.reindent true)
  (#is-not? indent.matchesCurrentRow startPosition)
  (#set! indent.force true))

; The delimiters carry the indent; every block in this language is braced.
"{" @indent

"}" @dedent
