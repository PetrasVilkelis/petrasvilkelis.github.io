const burger = document.querySelector(
  ".navbar__burger"
);
const mobileNav = document.querySelector(
  ".navbar__mobile"
);

burger.addEventListener("click", () => {
  if (mobileNav.style.display === "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
});

function isStillMobile() {
  if (window.innerWidth >= 768) {
    mobileNav.style.display = "none";
  }
}

window.onresize = isStillMobile;
