// Abstract View
export default class AbstractView {
  constructor(params) {
    // params is passed to all views, but only used by views that need it
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
