const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
    if (popup.classList.contains('open')) {
        popup.classList.add('close')
        popupSlide.classList.add('slideout');
        setTimeout(() => {
            popup.classList.remove('open');
            popup.classList.remove('close');
            popupSlide.classList.remove('slideout');
        }, 300);

    } else {
        e.preventDefault();
        popup.classList.add("open");
        popupSlide.classList.add("slidein")
    }
}
