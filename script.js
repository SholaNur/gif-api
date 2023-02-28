let gifContainer = document.querySelector("#gif-container");
const getGif = () => {
  let apiURL =
    "https://api.giphy.com/v1/gifs/random?api_key=6MR93ckMbt2MbMGHfPWNMhCgFTjsqsUl";

  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      let gifImage = document.createElement("img");
      gifImage.setAttribute("src", `${data.data.images.original.url}`);
      gifContainer.appendChild(gifImage);
    });
};
getGif();
