const APPLE_LOGO_SVG = `
  <svg viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.6 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 71.2 0 130.3 46.2 174.3 46.2 42.3 0 108.2-49.1 189.8-49.1 30.8 0 108.2 2.6 157.9 99.3zm-153.8-200.6c37.8-44.9 64.8-107.5 64.8-170 0-8.7-.6-17.4-2-25.5-61.7 2.3-136.2 41.3-181.3 92.5-33.7 37.8-66.1 100.4-66.1 163.7 0 9.4 1.3 18.7 2 22.1 3.9.7 10.3 1.3 16.7 1.3 55.8 0 126.5-37.2 166-84.1z"/>
  </svg>`;

function renderIcon(app) {
  if (app.icon) {
    return `<img src="${app.icon}" alt="${app.name} icon" class="app-icon" />`;
  }
  return `<div class="app-icon icon-fallback">${app.iconFallback ?? ""}</div>`;
}

function renderTags(tags) {
  return tags.map((t) => `<span class="tag">${t}</span>`).join("");
}

function renderLinks(links) {
  const parts = [];

  if (links.appStore) {
    parts.push(`
      <a href="${links.appStore}" target="_blank" rel="noopener noreferrer" class="btn-store">
        ${APPLE_LOGO_SVG}
        App Store
      </a>`);
  }

  if (links.privacy) {
    parts.push(`<a href="${links.privacy}" class="link-minor">プライバシーポリシー</a>`);
  }

  if (links.terms) {
    parts.push(`<span class="link-sep">·</span>`);
    parts.push(`<a href="${links.terms}" class="link-minor">利用規約</a>`);
  }

  return parts.join("\n");
}

/**
 * @param {App} app
 * @returns {HTMLElement}
 */
export function createAppCard(app) {
  const article = document.createElement("article");
  article.className = "app-card";
  article.innerHTML = `
    <div class="app-header">
      ${renderIcon(app)}
      <div class="app-meta">
        <div class="app-category">${app.category}</div>
        <div class="app-name">${app.name}</div>
      </div>
    </div>
    <p class="app-description">${app.description}</p>
    <div class="app-tags">${renderTags(app.tags)}</div>
    <div class="app-actions">${renderLinks(app.links)}</div>
  `;
  return article;
}
