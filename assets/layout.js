async function loadPartials() {
  const basePath = location.pathname.includes("/blog/") ? "../" : "";

  try {
    const [header, footer] = await Promise.all([
      fetch(basePath + "partials/header.html"),
      fetch(basePath + "partials/footer.html")
    ]);

    document.getElementById("header").innerHTML = await header.text();
    document.getElementById("footer").innerHTML = await footer.text();
  } catch (error) {
    console.error("Could not load the layout parts:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadPartials);
