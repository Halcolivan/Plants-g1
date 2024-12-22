const hamburger = document.querySelector(".hamburger"); //найти кнопку бургер меню
const hamburger__menu = document.querySelector(".hamburger__list"); //найти список пунктов меню
hamburger.addEventListener("click", () => {
  //при клике на бургер
  hamburger.classList.toggle("active"); //с классом active бургер превращатеся в крестик
  hamburger__menu.classList.toggle("active"); //с классом active выплывает бургер меню
});

// ======= закрыть бургер меню при клике на один из пунктов меню=====================================
const hamburger__item = document.querySelectorAll(".hamburger__item"); // querySelectorAll возвращает коллекцию массивов
function removeActive() {
  //эта функция убирает класс active у выбранных элементов и меню уплывает из вида
  hamburger.classList.remove("active");
  hamburger__menu.classList.remove("active");
}
hamburger__item.forEach((item) => item.addEventListener("click", removeActive)); //forEach перебирает элементы из коллекции массивов и выполняет функцию для каждого выбранного

// ================== закрыть бургер меню при клике вне бургер меню =================================
const notMenu = document.querySelector(".hamburger__menu"); //отслеживать клики вне бургер меню
document.addEventListener("click", (event) => {
  //при клике вне бургер меню
  if (!notMenu.contains(event.target)) {
    //если клик был не по значению константы
    hamburger.classList.remove("active"); //кнопку превращать из крестика в бургер
    hamburger__menu.classList.remove("active"); //меню плавно убирать
  }
});
