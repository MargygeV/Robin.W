const header = document.getElementById("header")
const headerClassList = header.classList
const menu = document.getElementById("header__nav")
const burger = document.querySelector(".burger__btn")
const bodyClassList = document.querySelector("body").classList
const menuLinks = document.querySelectorAll(".header__list-item a")
const targetSections = document.querySelectorAll(".target-section")

const headerActiveClass = "header_scrolled"
const menuActiveClass = "menu-active"

const toggleMenu = () => {
  headerClassList.toggle(menuActiveClass),
  menu.classList.toggle(menuActiveClass),
  burger.classList.toggle(menuActiveClass)
};

window.addEventListener("scroll", () => {
  let e = pageYOffset;
  e > 90 ? headerClassList.add(headerActiveClass) : headerClassList.remove(headerActiveClass)
  
  targetSections.forEach(( (t, n) => {
    t.offsetTop - header.clientHeight <= e && (menuLinks.forEach((e => {
      e.classList.contains(menuActiveClass) && e.classList.remove(menuActiveClass)
    })),
    menuLinks[n].classList.add(menuActiveClass))
  }))
});

burger.addEventListener("click", () => { 
  toggleMenu(bodyClassList.toggle(menuActiveClass))
});

menuLinks.forEach((e => {
  e.addEventListener("click", ( () => {
    toggleMenu(bodyClassList.remove(menuActiveClass))
  }))
}));