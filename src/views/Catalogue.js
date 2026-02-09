import AbstractView from "./AbstractView.js";
import { fetchGames } from "../api.js";

export default class Catalogue extends AbstractView {
  async getHtml() {
    return `
      <h1>Catalogue!</h1>
      <div id="container"></div>
    `;
  }

  async afterRender() {
    const container = document.getElementById("container");
    const games = await fetchGames();

    container.innerHTML = games
      .map(
        (game) => /* HTML */ `
          <div class="card">
            <h2>${game.name}</h2>
            <p>${game.description}</p>
            <img src="${game.image.url}" alt="${game.name}" />
            <p><strong>${game.released}</strong></p>
          </div>
        `,
      )
      .join("");
  }
}
