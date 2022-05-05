const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")

burger.addEventListener("click", burgerHandler);

function burgerHandler(e) {

    if (popup.classList.contains('open')) {
        popup.classList.add('close')
        popupSlide.classList.add('slideout');
        setTimeout(() => {
            popup.classList.remove('close');
            popup.classList.remove('open');
            popupSlide.classList.remove('slideout');
            popupSlide.classList.remove('slidein');
        }, 300);

    } else {

        popup.classList.add("open");
        popupSlide.classList.add("slidein")

    }
    burger.classList.toggle('active');
}
