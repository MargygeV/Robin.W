const header = document.getElementById('header').classList
const menu = document.getElementById('header__nav')
const burger = document.querySelector('.burger__btn')
const body = document.querySelector('body')

const header_activeClass = "header_scrolled"
const menu_activeClass = "menu-active"

window.addEventListener('scroll', e => {
	if(pageYOffset > 400) header.add(header_activeClass)
	else header.remove(header_activeClass)
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active')
 
  if(header && menu)
  {
  	header.toggle(menu_activeClass)
  	menu.classList.toggle(menu_activeClass)
  	body.classList.toggle(menu_activeClass)
  }  	
});