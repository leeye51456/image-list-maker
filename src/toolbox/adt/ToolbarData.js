class ToolbarData {
  constructor({name, label}, items) {
    this.name = name;
    this.label = label;
    this.items = items;
    this.byName = {};

    for (const item of items) {
      this.byName[item.name] = item;
    }
  }

  getItemByName(name) {
    return this.byName[name];
  }

  bindHandlers(thisArg) {
    for (const item of this.items) {
      if (typeof item.handler === 'function') {
        item.handler = item.handler.bind(thisArg);
      }
    }
  }
}

export default ToolbarData;
