function hamburgerBtn() {
  const hidden = document.querySelector(".hidden");
  const change_hidden = document.querySelector(".change_hidden");

  hidden.addEventListener("click", () => {
    change_hidden.classList.toggle("hidden_container1");
  });
}
hamburgerBtn();

fetch("http://localhost:3000/burger")
  .then((x) => x.json())
  .then((data) => cards(data));

const burgers = document.querySelector("#burgers");
function cards(products) {
  products.forEach((element) => {
    burgers.innerHTML += `
        <div class="card_menu">
        <img
          src="${element.img}"
          alt=""
          class="img_menu"
        />
        <h2 class="title">${element.title}</h2>
        <p class="description">
          ${element.description}
        </p>
        <button class="btn_price">${element.price.toFixed(2)} ₼</button>
        </div> `;
  });
}

fetch("http://localhost:3000/french_fries")
  .then((res) => res.json())
  .then((data) => friesCreate(data));

const french_fries = document.querySelector("#french_fries");

function friesCreate(products) {
  products.forEach((burger) => {
    french_fries.innerHTML += `
        <div class="card_menu">
        <img
          src="${burger.img}"
          alt=""
          class="img_menu"
        />
        <h2 class="title">${burger.title}</h2>
        <p class="description">
          ${burger.description}
        </p>
        <button class="btn_price">${burger.Price} ₼</button>
        </div> `;
  });
}

fetch("http://localhost:3000/sauces")
  .then((res) => res.json())
  .then((data) => sauceCreate(data));

const sauces_id = document.querySelector("#sauces_id");

function sauceCreate(products) {
  products.forEach((sauce) => {
    sauces_id.innerHTML += `
        <div class="card_menu">
        <img
          src="${sauce.img}"
          alt=""
          class="img_menu"
        />
        <h2 class="title">${sauce.title}</h2>
        <p class="description">
          ${sauce.description}
        </p>
        <button class="btn_price">${sauce.Price} ₼</button>
        </div> `;
  });
}

fetch("http://localhost:3000/cold_drinks")
  .then((res) => res.json())
  .then((data) => coldDrinkCreate(data));

const cold_drinks = document.querySelector("#cold_drinks");

function coldDrinkCreate(products) {
  products.forEach((coldDrink) => {
    cold_drinks.innerHTML += `
        <div class="card_menu">
        <img
          src="${coldDrink.img}"
          alt=""
          class="img_menu"
        />
        <h2 class="title">${coldDrink.title}</h2>
        <p class="description">
          ${coldDrink.description}
        </p>
        <button class="btn_price">${coldDrink.Price} ₼</button>
        </div> `;
  });
}

fetch("http://localhost:3000/hot_drinks")
  .then((res) => res.json())
  .then((data) => hotDrinkCreate(data));

const hot_drinks = document.querySelector("#hot_drinks");
const basketArr = [];

function hotDrinkCreate(products) {
  products.forEach((hotDrink) => {
    hot_drinks.innerHTML += `
        <div class="card_menu">
        <img
          src="${hotDrink.img}"
          alt=""
          class="img_menu"
        />
        <h2 class="title">${hotDrink.title}</h2>
        <p class="description">
          ${hotDrink.description}
        </p>
        <button class="btn_price" >${hotDrink.Price} ₼</button>
        
        
        </div> `;
        const card_menu = document.createElement("div")
        card_menu.classList.add("card_menu")
        card_menu.innerHTML = `
        <img
        src="${hotDrink.img}"
        alt=""
        class="img_menu"
      />
      <h2 class="title">${hotDrink.title}</h2>
      <p class="description">
        ${hotDrink.description}
      </p>
      <button class="btn_price" >${hotDrink.Price} ₼</button>
        `
  });
  const priceButtons = document.querySelectorAll(".btn_price");
  console.log(priceButtons[0]);
  priceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("hi", button.id)
      const productId = button.id;
      const clickedProduct = products.find(
        (product) => product.id === productId
      );

      // basketArr.push(products)
      // console.log(basketArr);
      // console.log(products);
    });
  });

  const dark_mode = document.querySelector(".dark_mode")
const isDark = JSON.parse(localStorage.getItem("lightMode"))

if (isDark) {
  document.body.classList.remove("black")
}
else{
  document.body.classList.add("black")
  dark_mode.textContent = "🌞"
}

const title = document.querySelectorAll(".title")
dark_mode.addEventListener("click",function () {

if(document.body.classList.contains("black")){
  document.body.classList.remove("black")
  dark_mode.textContent = "🌙"
  localStorage.setItem("lightMode",true)
}
else{
  document.body.classList.add("black")
  localStorage.setItem("lightMode",false)
  dark_mode.textContent = "🌞"

}
title.forEach(element => {
  element.style.color = "red"
});
//   document.body.classList.toggle("black")

})
}
