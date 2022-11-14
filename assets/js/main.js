
// Shrink Sticky Navigation Bar

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.padding = "5px";
        document.getElementById("logot1").style.maxWidth = "65%";
        document.getElementById("marquee").style.display = "none";
        document.getElementById("language").style.display = "none";
        // document.getElementById("mobile__nav").style.backgroundColor = "rgba(29, 29, 29)";
        // document.getElementById("bar1").style.backgroundColor = "#fff";
        // document.getElementById("bar2").style.backgroundColor = "#fff";
        // document.getElementById("bar3").style.backgroundColor = "#fff";
        // document.getElementById("mobile-logot1").style.maxWidth = "70%";
    } else {
        document.getElementById("navbar").style.padding = "20px 0";
        document.getElementById("logot1").style.maxWidth = "100%";
        document.getElementById("marquee").style.display = "flex";
        document.getElementById("language").style.display = "flex";
        // document.getElementById("mobile__nav").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        // document.getElementById("bar1").style.backgroundColor = "#000";
        // document.getElementById("bar2").style.backgroundColor = "#000";
        // document.getElementById("bar3").style.backgroundColor = "#000";
        // document.getElementById("mobile-logot1").style.maxWidth = "85%";
    }
}

// MOBILE NAVBAR RESPONSIVE

const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".header__navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");

})

// OPEN SEARCH BOX

document.getElementById("scout-icon").addEventListener("click", function() {
    document.getElementById("search__box").style.display = "flex"
})

document.getElementById("fa-x-icon").addEventListener("click", function() {
    document.getElementById("search__box").style.display = "none"
})

// OPEN MOBILE SEARCH BOX

document.getElementById("mobile-scout-icon").addEventListener("click", function() {
    document.getElementById("mobile-search__box").style.display = "flex"
})

document.getElementById("mobile-fa-x-icon").addEventListener("click", function() {
    document.getElementById("mobile-search__box").style.display = "none"
})