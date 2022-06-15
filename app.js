"use strict";

const memeContainer = document.querySelector(".memeContainer");
const memeButton = document.getElementById("button");

const clearElement = function () {
  memeContainer.innerHTML = "";
};

// https://meme-api.herokuapp.com/gimme //API endpoint

// // XHR request
// const XHR = new XMLHttpRequest();

// XHR.onload = function () {
//   const data = JSON.parse(this.responseText);
//   //   console.log(data.url);
//   return data.url;
// };
// XHR.onerror = function (error) {
//   alert("Failed to Load 😢", error);
// };
// XHR.open("GET", "https://meme-api.herokuapp.com/gimme", true);
// XHR.send();

// fetch request + async/await
// const fetchMEME = async () => {
//   try {
//     const response = await fetch("https://random.dog/woof.json");
//     const data = await response.json();
//     console.log(data.url);
//     return data.url;
//   } catch (error) {
//     alert("Failed to Fetch 😭", error);
//   }
// };

// Axios request
// const axiosGET = axios
//   .get("https://meme-api.herokuapp.com/gimme")
//   .then((response) => {
//     // console.log(response.data.url);
//     return response.data.url;
//   })
//   .catch((error) => {
//     alert("API Failed 😢", error);
//   });

const renderedMeme = function (res) {
  memeContainer.insertAdjacentHTML(
    "beforeend",
    `<h3>${res.data.title}</h3> <img src="${res.data.url}" alt="img" />`
  );
};

memeButton.addEventListener("click", function () {
  clearElement();
  axios
    .get("https://meme-api.herokuapp.com/gimme")
    .then((res) => renderedMeme(res));
});
