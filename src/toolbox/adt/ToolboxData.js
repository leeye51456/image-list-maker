class ToolboxData {
  constructor(toolbars) {
    this.toolbars = toolbars;
    this.byName = {};

    for (const toolbar of toolbars) {
      this.byName[toolbar.name] = toolbar;
    }
  }

  getToolbarByName(name) {
    return this.byName[name];
  }

  getToolbarItemByNames(toolbarName, itemName) {
    const toolbar = this.getToolbarByName(toolbarName);
    return toolbar && toolbar.getItemByName(itemName);
  }

  bindHandlers(thisArg) {
    for (const toolbar of this.toolbars) {
      toolbar.bindHandlers(thisArg);
    }
  }
}

export default ToolboxData;
