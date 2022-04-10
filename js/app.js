// Topbar
const topBar = {
	classname: 'topbar'
};

let nanobar = new Nanobar( topBar );
nanobar.go(33);
nanobar.go(66);
nanobar.go(100);


// Navbar
const navbar = document.querySelector('.navbar'),
	navbarItems = navbar.querySelectorAll('.navbar__link');

navbar.onclick = function(e) {
    console.log("sip")
    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
    e.target.classList.add('active');
}


// AOS
AOS.init( {
	offset: 200,
	duration: 600,
	easing: 'ease-in-sine',
	delay: 200,
	once: true,
	disable: 'mobile'
});