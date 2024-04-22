function hamburgerBtn() {
  const hidden = document.querySelector(".hidden");
  const change_hidden = document.querySelector(".change_hidden");

  hidden.addEventListener("click", () => {
    change_hidden.classList.toggle("hidden_container1");
  });
}
hamburgerBtn()



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

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}