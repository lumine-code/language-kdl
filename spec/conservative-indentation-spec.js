const path = require("node:path");

describe("language-kdl conservative indentation", () => {
  let editor;

  beforeEach(async () => {
    const pack = await lumine.packages.activatePackage(path.resolve(__dirname, ".."));
    for (const grammar of pack.grammars) {
      if (grammar.queryPaths?.indentsQuery) await grammar.getQuery("indentsQuery");
    }
    editor = await lumine.workspace.open();
    editor.setGrammar(lumine.grammars.grammarForScopeName("source.kdl"));
    editor.update({ tabLength: 2, softTabs: true });
  });

  afterEach(() => editor?.destroy());

  async function setText(source) {
    editor.setText(source);
    expect(await editor.whenGrammarSettled()).toBe(true);
  }

  async function enter(source, expected, row = 0) {
    await setText(source);
    editor.setCursorBufferPosition([row, Infinity]);
    editor.insertText("\n", { autoIndent: true, autoIndentNewline: true });
    await editor.whenGrammarSettled();
    expect(editor.lineTextForBufferRow(row + 1))
      .withContext(source)
      .toBe(" ".repeat(expected));
    expect(editor.getCursorBufferPosition().column).withContext(source).toBe(expected);
  }

  it("indents child blocks and ignores literal or comment braces", async () => {
    await enter("node {", 2);
    for (const source of ['node "{"', "node {}", "// {"]) await enter(source, 0);
  });

  it("recognizes raw-string recovery without hiding actual child blocks", async () => {
    for (const source of ['node #"{', 'node ##"text {', 'node #"quoted " text {'])
      await enter(source, 0);
    await enter('node {\n  child #"{', 2, 1);
    await enter('node #"{"# {', 2);
    await enter('node ##"{"## {', 2);
  });

  it("preserves whitespace inside multiline literals and comments when reindenting", async () => {
    const source =
      'node """\n    first\n       indented\n    last\n    """\n/* head\n       aligned\n*/';
    await setText(source);
    const before = editor.getText().split("\n");
    await editor.autoIndentBufferRows(0, editor.getLastBufferRow());
    for (const row of [1, 2, 3, 4, 6, 7]) {
      expect(editor.lineTextForBufferRow(row)).withContext(String(row)).toBe(before[row]);
    }
  });
});
