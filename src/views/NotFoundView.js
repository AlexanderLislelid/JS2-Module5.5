import AbstractView from "./AbstractView.js";

export default class NotFound extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("404 - Page Not Found");
  }

  async getHtml() {
    return `
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <p><a href="/" data-link>Return to Home</a></p>
        `;
  }
}
