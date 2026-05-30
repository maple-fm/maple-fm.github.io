import { apps } from "./data/apps.js";
import { createAppCard } from "./components/AppCard.js";

const grid = document.getElementById("apps-grid");

for (const app of apps) {
  grid.appendChild(createAppCard(app));
}
