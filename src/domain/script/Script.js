export class Script {
  constructor(content) {
    this.content = content || "";
    this.segments = [];
    this.hooks = [];
    this.summary = "";
    this.extended = "";
  }

  updateContent(newContent) {
    this.content = newContent;
  }
}
