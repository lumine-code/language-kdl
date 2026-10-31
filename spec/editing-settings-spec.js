const path = require("node:path");

describe("kdl editing settings", () => {
  let editor;

  beforeEach(async () => {
    jasmine.useRealClock();
    const pack = await lumine.packages.activatePackage(path.resolve(__dirname, ".."));
    await pack.resourceLoadPromise;
    editor = await lumine.workspace.open();
    editor.setGrammar(lumine.grammars.grammarForScopeName("source.kdl"));
    editor.update({ autoIndent: false });
    await editor.whenGrammarSettled();
  });

  afterEach(() => editor?.destroy());

  async function setText(text) {
    editor.setText(text);
    expect(await editor.whenGrammarSettled()).toBe(true);
  }

  it("pairs supported syntax without inventing unsupported quotes or containers", async () => {
    await lumine.packages.activatePackage("bracket-matcher");
    for (const [typed, expected] of [
      ["(", "()"],
      ["{", "{}"],
      ['"', '""'],
      ["'", "'"],
      ["[", "["],
      ["`", "`"],
    ]) {
      await setText("node ");
      editor.setCursorBufferPosition([editor.getLastBufferRow(), Infinity]);
      await editor.insertText(typed);
      await editor.whenGrammarSettled();
      expect(editor.getText())
        .withContext(typed)
        .toBe("node " + expected);
    }
  });

  it("adds an extra line only for child blocks rather than type annotations", async () => {
    await lumine.packages.activatePackage("bracket-matcher");
    await setText("()node");
    editor.setCursorBufferPosition([0, 1]);
    await editor.insertNewline();
    expect(editor.getLineCount()).toBe(2);
    await setText("node {}");
    editor.setCursorBufferPosition([0, 6]);
    await editor.insertNewline();
    expect(editor.getLineCount()).toBe(3);
  });

  it("exposes both supported comment forms while keeping line toggles reversible", async () => {
    const delimiters = await editor.getCommentDelimitersForBufferPosition([0, 0]);
    expect(delimiters.line).toBe("//");
    expect(delimiters.block).toEqual(["/*", "*/"]);
    await setText("node");
    editor.setCursorBufferPosition([0, 0]);
    await editor.toggleLineCommentsInSelection();
    expect(editor.getText()).toBe("// node");
    await editor.whenGrammarSettled();
    await editor.toggleLineCommentsInSelection();
    expect(editor.getText()).toBe("node");
  });
});
