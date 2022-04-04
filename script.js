"use strict";

let input = document.querySelector(".search_input");
let search = document.querySelector(".search_btn");

let foodName = document.querySelector(".food_title");
let showMore = document.querySelector(".food_btn");

let popup = document.querySelector(".popup");
let close = document.querySelector(".popup_close");
let popupName = document.querySelector(".popup_title");
let popupContent = document.querySelector(".popup_content");
let body = document.querySelector(".body");
let error = document.querySelector(".header_result");
let descrip = document.querySelector(".popup_description");

popup.style.display = "none";

// showMore.addEventListener("click", function (e) {
//   popup.style.display = "block";
// });

let arr;

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    getResults(input.value);
    input.value = "";
  }
});

function getResults(meal) {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
    .then((ali) => {
      return ali.json();
    })
    .then((obj) => {
      arr = obj.meals;
      render(arr);
      console.log(obj);
    });
}

function render(arr) {
  arr.forEach((element) => {
    let html = `<div class="food_box">
    <img src="${element.strMealThumb}" alt="">
      <div class="food_content">
        <div class="food_title">${element.strMeal}</div>
        <div class="food_time">
        <i class="fa-regular fa-clock"></i>
          35 mins
        </div>
        <div class="food_footer">
          <div class="food_star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
          </div>
          <div class="food_btn">show more...</div>
        </div>
      </div>
    </div>`;

    popupName.innerHTML = `${element.strMeal}`;
    popupContent.innerHTML = `${element.strInstructions}`;
    descrip.innerHTML = `${element.strCategory}`;
    video.src;
    body.insertAdjacentHTML("beforeend", html);
  });
}

body.addEventListener("click", function (e) {
  if (e.target.classList.contains("food_btn")) {
    // e.target.closest(".popup").add();
    popup.style.display = "block";
  }
});

close.addEventListener("click", function () {
  popup.style.display = "none";
});
