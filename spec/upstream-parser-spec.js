describe("KDL 2 values", () => {
  let editor;

  beforeEach(async () => {
    await lumine.packages.activatePackage("language-kdl");
    editor = await lumine.workspace.open();
    editor.setGrammar(lumine.grammars.grammarForScopeName("source.kdl"));
  });

  afterEach(() => editor?.destroy());

  it("parses and highlights keyword values and custom type annotations", async () => {
    editor.setText("node #true #false #null #inf #-inf #nan (custom)value\n");
    await editor.languageMode.ready;
    const root = editor.languageMode.tree.rootNode;
    expect(root.hasError).toBe(false);
    expect(root.descendantsOfType("boolean").length).toBe(2);
    expect(root.descendantsOfType("keyword_number").length).toBe(3);
    expect(editor.scopeDescriptorForBufferPosition([0, 5]).getScopesArray()).toContain(
      "constant.language.boolean.kdl",
    );
    expect(editor.scopeDescriptorForBufferPosition([0, 18]).getScopesArray()).toContain(
      "constant.language.kdl",
    );
  });
});
