// Topbar
const topBar = {
	classname: 'topbar'
};

let nanobar = new Nanobar( topBar )
nanobar.go(33)
nanobar.go(66)
nanobar.go(100)


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

	navbarItems.forEach(function(item) {
		item.classList.remove('active');
	});

	[].forEach.call(pages, function(page) {
		page.classList.remove('active');
	})

	e.target.classList.add('active');

	let clickedPage = e.target.getAttribute('href');

	document.querySelector(clickedPage).classList.add('active');
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
})


// Work toggle
const workToggle = document.querySelector('.work-toggle'),
	workToggleText = workToggle.querySelector('span'),
	workHeaderLead = sectionWork.querySelector('.section-header > p.lead')

workToggle.addEventListener('click', () => {
	sectionWork.classList.toggle('work--experience')

	if (workToggleText.textContent === 'Experience') {
		workToggleText.textContent = 'Projects'
		workHeaderLead.textContent = 'Summary of work experience about the various roles I have worked on for the past years.'
	} else {
		workToggleText.textContent = 'Experience'
		workHeaderLead.textContent = 'Collection of projects, from websites to webapps and everything tech. Includes experiments and self-discoveries.'
	}
})