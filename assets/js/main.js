const goTopBtn = document.getElementById("go-top");

goTopBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * Language
 */
const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("active");
});

langMenu.addEventListener("click", (e) => {
    langMenu.classList.remove("active");
});

const navBtn = document.getElementById("nav-btn");
const navMenu = document.getElementById("header-bottom-nav");

navBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

/**
 * Banner
 */
const banner = document.getElementById("banner").querySelector(".slider");
const bannerItems = banner.querySelectorAll(".slider-item");
const bannerItemWidth = bannerItems[0].offsetWidth;
const bannerItemCount = bannerItems.length;
const bannerBtns = banner.querySelectorAll(".slider-btns li");
const bannerBtnsCount = bannerBtns.length;
let bannerIntervalId;
let bannerCurrentIndex = 0;

const startBanner = () => {
    clearTimeout(bannerIntervalId);

    bannerItems.forEach((item) => {
        item.classList.remove("active");
    });
    bannerItems[bannerCurrentIndex].classList.add("active");
    bannerBtns.forEach((item) => {
        item.classList.remove("active");
    });
    bannerBtns[bannerCurrentIndex].classList.add("active");

    bannerIntervalId = setTimeout(() => {
        bannerCurrentIndex = bannerCurrentIndex < bannerItemCount - 1 ? bannerCurrentIndex + 1 : 0;
        startBanner();
    }, 4000);
};

bannerBtns.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
        bannerCurrentIndex = bannerBtns.values().toArray().indexOf(evt.currentTarget);
        startBanner();
    });
});

startBanner();
