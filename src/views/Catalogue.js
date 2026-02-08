import AbstractView from "./AbstractView.js";

export default class Catalogue extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Catalogue");
  }

  async getHtml() {
    return `
            <h1>Catalogue!</h1>
            <p>Library of old games will render here</p>
        `;
  }
}
