const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const popupSlide = document.querySelector("#popupSlide")
const sliderItem = document.querySelectorAll(".our_requirements_content_item");
const sliderPhoto = document.querySelector(".our_requirements_img");

burger.addEventListener("click", burgerHandler);
popup.addEventListener("click", (e) => {
    burgerHandler(e);
});

sliderItem.forEach(e => {
    e.addEventListener("click", () => {
        setImage(e, sliderItem);
    });
});

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

function setImage(el, elList) {
    const imgId = el.getAttribute('id');

    elList.forEach(elem => {
        elem.classList.remove('main_item');
    });

    el.classList.add('main_item');
    sliderPhoto.setAttribute('src', `img/our-requirements/${imgId}.jpg`);
}



const moreListingsBut = document.querySelector('.show_more');
const moreListings = document.querySelectorAll('.current_listings_item_description_more');

moreListingsBut.addEventListener("click", () => {
    showMore(moreListings);
});


function showMore(elem) {
    elem.forEach(el => {
        el.classList.toggle('show_listing');
    });

}


