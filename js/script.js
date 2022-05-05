const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    popupSlide.classList.toggle("slidein")
}
