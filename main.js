window.addEventListener('scroll', e => {
	let navbar = document.getElementById('navbar').classList
	let active_class = "header_scrolled"

	if(pageYOffset > 400) navbar.add(active_class)
	else navbar.remove(active_class)
})