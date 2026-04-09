//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  episodeList.forEach((episodes) => {
    const paragraph = document.createElement("h2");
    paragraph.textContent = `S${episodes.seasons}E${episodes.number}: ${episodes.name}`;
    rootElem.appendChild(paragraph);

    const image = document.createElement("img");
    image.src = episodes.image.medium;
    rootElem.appendChild(image);

    const summary = document.createElement ("summary")
  });
}
window.onload = setup;
