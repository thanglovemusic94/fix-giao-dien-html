
// Shrink Sticky Navigation Bar



// if (window.matchMedia('screen and (max-width: 768px)').matches) {}



// const header = document.getElementById('header');
// document.getElementById("slider").style.top = header.offsetHeight;
// function handler() {
//     var header2 = document.getElementById('header');
//     var heightHeader = header2.offsetHeight;
//     document.getElementById("slider").style.top = heightHeader;
//     console.log(heightHeader);
// }
// const observer = new IntersectionObserver(handler,);
// observer.observe(header);
document.getElementById("slider").style.top = "121px";
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        // header.style.padding = "5px";
        document.getElementById("logot1").style.maxWidth = "65%";
        document.getElementById("header__navbar-top").style.display = "none";
        var header1 = document.getElementById('header');
        document.getElementById("slider").style.top = "51px";
        document.getElementById("slider").style.transition = "all 0.3s";
        if (window.matchMedia('screen and (max-width: 960px)').matches) {
            document.getElementById("slider").style.top = "51px";
        }else{
            document.getElementById("slider").style.top = "81px";
        }
       
        // document.getElementById("mobile__nav").style.backgroundColor = "rgba(29, 29, 29)";
        // document.getElementById("bar1").style.backgroundColor = "#fff";
        // document.getElementById("bar2").style.backgroundColor = "#fff";
        // document.getElementById("bar3").style.backgroundColor = "#fff";
        // document.getElementById("mobile-logot1").style.maxWidth = "70%";
    } else {
        // header.style.padding = "20px 0";
        document.getElementById("logot1").style.maxWidth = "100%";
        document.getElementById("header__navbar-top").style.display = "flex";
       
        if (window.matchMedia('screen and (max-width: 960px)').matches) {
            document.getElementById("slider").style.top = "51px";
        }else{
            document.getElementById("slider").style.top = "121px";
        }
        document.getElementById("slider").style.transition = "all 0.3s"

        // document.getElementById("mobile__nav").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        // document.getElementById("bar1").style.backgroundColor = "#000";
        // document.getElementById("bar2").style.backgroundColor = "#000";
        // document.getElementById("bar3").style.backgroundColor = "#000";
        // document.getElementById("mobile-logot1").style.maxWidth = "85%";
    }
}

// MOBILE header RESPONSIVE

const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".header__header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");

})

// OPEN SEARCH BOX

document.getElementById("scout-icon").addEventListener("click", function () {
    document.getElementById("search__box").style.display = "flex"
})

document.getElementById("fa-x-icon").addEventListener("click", function () {
    document.getElementById("search__box").style.display = "none"
})

// OPEN MOBILE SEARCH BOX

document.getElementById("mobile-scout-icon").addEventListener("click", function () {
    document.getElementById("mobile-search__box").style.display = "flex"
})

document.getElementById("mobile-fa-x-icon").addEventListener("click", function () {
    document.getElementById("mobile-search__box").style.display = "none"
})