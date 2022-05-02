"use strict";

const memeContainer = document.querySelector(".memeContainer");
const memeButton = document.querySelector(".generate");

// https://meme-api.herokuapp.com/gimme //API endpoint

//XHR request
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

//fetch request + async/await
const fetchMEME = async () => {
  try {
    const response = await fetch("https://meme-api.herokuapp.com/gimme");
    const data = await response.json();
    // console.log(data.url);
    return data.url;
  } catch (error) {
    alert("Failed to Fetch 😭", error);
  }
};

fetchMEME();

//Axios request
// const axiosGET = axios
//   .get("https://meme-api.herokuapp.com/gimme")
//   .then((response) => {
//     // console.log(response.data.url);
//     return response.data.url;
//   })
//   .catch((error) => {
//     alert("API Failed 😢", error);
//   });
