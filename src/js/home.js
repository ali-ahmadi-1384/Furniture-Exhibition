const tablet = window.matchMedia("(min-width: 768px)");
const laptop = window.matchMedia("(min-width: 1024px)");
const largeLaptop = window.matchMedia("(min-width: 1440px)");

const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuList = document.querySelector(".menu");
const shop = document.querySelector("#shop-li");
const decoration = document.querySelector("#decoration-li");
const house = document.querySelector("#house-li");
const searchIcon = document.querySelector(".search-icon");
const swiper = document.querySelectorAll(".swiper");
const swiperDecor = document.querySelectorAll(".swiper-decor");
const decorBox = document.querySelectorAll(".decor");
const products = document.querySelector(".products");

const ul1 = document.querySelector(".ul-1");
const ul2 = document.querySelector(".ul-2");
const ul3 = document.querySelector(".ul-3");

const left1 = document.querySelector(".left-1");
const left2 = document.querySelector(".left-2");
const left3 = document.querySelector(".left-3");

body.addEventListener("click", () => {
    menuList.classList.remove("menu-mobile");
});

menuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    menuList.classList.add("menu-mobile");
});

menuList.addEventListener("click", (event) => {
    event.stopPropagation();
});

shop.addEventListener("click", () => {
    ul1.classList.toggle("shop");
    left1.classList.toggle("rotate");
});

decoration.addEventListener("click", () => {
    ul2.classList.toggle("shop");
    left2.classList.toggle("rotate");
});

house.addEventListener("click", () => {
    ul3.classList.toggle("shop");
    left3.classList.toggle("rotate");
});

let number = 1;
let numberDecor = 1;
let length = 9;
let lengthDecor = 4;

const remover = () => {
    for (let index = 0; index < swiper.length; index++) {
        swiper[index].classList.remove("active");
    }
}

const removerDecor = () => {
    for (let indexDecor = 0; indexDecor < swiperDecor.length; indexDecor++) {
        swiperDecor[indexDecor].classList.remove("active");
    }
}

const removerBox = () => {
    for (let indexBox = 0; indexBox < decorBox.length; indexBox++) {
        decorBox[indexBox].classList.remove("visible");
    }
}

const asFirst = () => {
    number = 1;
    products.scrollLeft = 0;
    swiper[0].classList.add("active");
    swiper[length - 1].classList.remove("active");
}

const asFirstDecor = () => {
    numberDecor = 1;
    swiperDecor[0].classList.add("active");
    swiperDecor[lengthDecor - 1].classList.remove("active");
    decorBox[0].classList.add("visible");
    decorBox[3].classList.remove("visible");
}

setInterval(() => {
    const product = document.querySelectorAll(".product")[0].clientWidth;
    if (number >= length) {
        asFirst();
    } else {
        products.scrollLeft = (product * number) + (40 * number);
        remover()
        for (let index = 0; index < length; index++) {
            if (swiper[index].id == number) {
                swiper[index].classList.add("active");
            }
            swiper[index].addEventListener("click", () => {
                remover();
                swiper[index].classList.add("active");
                number = swiper[index].id;
                products.scrollLeft = (product * number) + (40 * number);
            });
        }
        number ++;
    }
}, 3000);

setInterval(() => {
    if (numberDecor == lengthDecor) {
        asFirstDecor();
    } else {
        removerBox();
        removerDecor();
        for (let indexBox = 0; indexBox < lengthDecor; indexBox++) {
            if (decorBox[indexBox].id == numberDecor) {
                decorBox[indexBox].classList.add("visible");
            }
        }
        
        for (let indexDecor = 0; indexDecor < lengthDecor; indexDecor++) {
            if (swiperDecor[indexDecor].id == numberDecor) {
                swiperDecor[indexDecor].classList.add("active");
            }
            swiperDecor[indexDecor].addEventListener("click", () => {
                removerBox();
                removerDecor();
                swiperDecor[indexDecor].classList.add("active");
                numberDecor = swiperDecor[indexDecor].id;
                decorBox[indexDecor].classList.add("visible");
            });
        }
        numberDecor ++;
    }
}, 3000);

// responsive

largeLaptop.addEventListener("change", changeLargeLap = () => {
    if (largeLaptop.matches) {
        menuBtn.style.display = "none";
        menuList.classList.add("menu-laptop");
        menuList.classList.remove("menu-mobile");
        length = 5;
        for (let index = 0; index < length + 4; index++) {
            swiper[index].style.display = "flex";
            if (swiper[index].id >= 5) {
                swiper[index].style.display = "none";
            }
        }
    } else {
        laptop.addEventListener("change", changeLap = (laptop) => {
            if (laptop.matches) {
                menuBtn.style.display = "none";
                menuList.classList.add("menu-laptop");
                menuList.classList.remove("menu-mobile");
                length = 6;
                for (let index = 0; index < length + 3; index++) {
                    swiper[index].style.display = "flex";
                    if (swiper[index].id >= 6) {
                        swiper[index].style.display = "none";
                    }
                }
            } else {
                menuBtn.style.display = "flex";
                menuList.classList.remove("menu-laptop");
                tablet.addEventListener("change", changeTap = (tablet) => {
                    if (tablet.matches) {
                        length = 7;
                        for (let index = 0; index < length + 2; index++) {
                            swiper[index].style.display = "flex";
                            if (swiper[index].id >= 7) {
                                swiper[index].style.display = "none";
                            }
                        }
                    } else {
                        length = 9;
                        for (let index = 0; index < length; index++) {
                            swiper[index].style.display = "flex";
                        }
                    }
                });
                
                changeTap(tablet);
            }
        });
        
        changeLap(laptop);
    }
});

changeLargeLap(largeLaptop);