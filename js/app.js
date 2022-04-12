// Topbar
const topBar = {
	classname: 'topbar'
};

let nanobar = new Nanobar( topBar );
nanobar.go(33);
nanobar.go(66);
nanobar.go(100);


// Navbar + page activate
const navbar = document.querySelector('.navbar'),
	navbarItems = navbar.querySelectorAll('.navbar__link'),
	pages = document.querySelectorAll('.page')

// navbar.onclick = function(e) {
//     console.log("sip")
//     for (let i = 0; i < navbarItems.length; i++) {
//         navbarItems[i].classList.remove('active');
//     }
//     e.target.classList.add('active');
// }

function activatePage(e) {
	e.preventDefault();

	navbarItems.forEach(function(item, index) {
		item.classList.remove('active');
	});

	[].forEach.call(pages, function(pane, index) {
		pane.classList.remove('active');
	})

	e.target.classList.add('active');

	let clickedPage = e.target.getAttribute('href');

	document.querySelector(clickedPage).classList.add('active');
    nanobar.go(100);
}

navbarItems.forEach(function(item, index) {
	item.addEventListener('click', activatePage)
})


// AOS
AOS.init( {
	offset: 200,
	duration: 600,
	easing: 'ease-in-sine',
	delay: 200,
	once: true,
	disable: 'mobile'
});


// Work projects custom cursor
const sectionWork = document.querySelector('.section--work');

sectionWork.addEventListener('mousemove', (e) => {
    gsap.to('.project-cursor__text', {
        x: e.clientX,
        y: e.clientY,
        stagger: -.02,
    })
});


// Work toggle
const workToggle = document.querySelector('.work-toggle'),
	workToggleText = workToggle.querySelector('span');

workToggle.addEventListener('click', () => {
	console.log('toggled!')
	sectionWork.classList.toggle('work--experience')

	if (workToggleText.textContent === 'Experience') {
		workToggleText.textContent = 'Projects'
	} else {
		workToggleText.textContent = 'Experience'
	}
})