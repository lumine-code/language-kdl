; Named nodes form the document outline. Slash-dashed nodes are comments.
((node (node_comment)) @ignore
  (#set! kdl.dismissSymbol true))

(node
  .
  name: (identifier) @name
  (#is-not? test.descendantOfNodeWithData "kdl.dismissSymbol")
  (#set! symbol.strip "^\"|\"$")) @definition.object

(prop key: (identifier) @name
  (#is-not? test.descendantOfType "node_field_comment")
  (#is-not? test.descendantOfNodeWithData "kdl.dismissSymbol")
  (#set! symbol.strip "^\"|\"$")) @definition.property
