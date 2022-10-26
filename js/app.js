// Topbar
const topBar = {
	classname: "topbar",
};

let nanobar = new Nanobar(topBar);
nanobar.go(33);
nanobar.go(66);
nanobar.go(100);


// Navbar + page activate
const navbar = document.querySelector(".navbar"),
	navbarItems = navbar.querySelectorAll(".navbar__link"),
	pages = document.querySelectorAll(".page"),
	home = document.querySelector(".section--home"),
	homeLead = home.querySelector(".hero > .harv-lead");

function activatePage(e) {
	e.preventDefault();

  	navbarItems.forEach(function (item, index) {
		item.classList.remove("active");
	});

  	[].forEach.call(pages, function (pane, index) {
		pane.classList.remove("active");
	});

	e.target.classList.add("active");

	let clickedPage = e.target.getAttribute("href");

	document.querySelector(clickedPage).classList.add("active");
	nanobar.go(100);
	scrollToTop();
}

navbarItems.forEach(function (item, index) {
	item.addEventListener("click", activatePage, scrollToTop);
});


// Work toggle
const sectionWork = document.querySelector(".section--work"),
	workToggle = document.querySelector(".work-toggle"),
	workToggleText = workToggle.querySelector("span"),
  	workHeaderLead = sectionWork.querySelector(".section-header > p.lead");

workToggle.addEventListener("click", () => {
	console.log("toggled!");
	sectionWork.classList.toggle("work--experience");

	if (workToggleText.textContent === "Experience") {
		workToggleText.textContent = "Projects";
		workHeaderLead.textContent = "Summary of work experience about the various roles I have worked on for the past years.";
  	} else {
		workToggleText.textContent = "Experience";
		workHeaderLead.textContent = "Collection of projects, from websites to webapps and everything tech. Includes experiments and self-discoveries.";
	}
});


// Scroll to top
const scrollButton = document.querySelector(".scroll-button"),
	rootElement = document.documentElement;

function handleScroll() {
	let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  	if (rootElement.scrollTop / scrollTotal > 0.4) {
		scrollButton.classList.add("show");
  	} else {
		scrollButton.classList.remove("show");
  	}
}


function scrollToTop() {
	// Scroll to top logic
  	rootElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}

scrollButton.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


// Project Modals
const modalOpen = function() {
	body.classList.add('modal-open')
}

const modalClose = function() {
	body.classList.remove('modal-open')
}

document.addEventListener('click', function (e) {
	e = e || window.event;
	let target = e.target;

	if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal' || target.closest('.primary-btn')) {
		if (target.hasAttribute('data-target') || target.parent) {
	  		var modalId = target.getAttribute('data-target');
	  		document.getElementById(modalId).classList.add('modal-active');
			e.preventDefault();
	  		modalOpen();
		}
	}

	if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.closest('.close-modal') || target.classList.contains('modal')) {
		var modal = document.querySelector('.modal.modal-active');
		modal.classList.remove('modal-active');
		e.preventDefault();
		modalClose();
	}
}, false);

document.body.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		console.log(e);
		document.querySelector('.close-modal').click();  
	}
})


// About Image Toggle
const imageToggleBtn = document.querySelector('.image-toggle'),
	dpWrapper = document.querySelector('.dp-wrapper'),
	meMaskedOn = 'assets/media/me-masked.webp',
	meMaskedOff = 'assets/media/me-beach.webp',
	dpTitle = document.querySelector('[data-about="dp"] .image');

imageToggleBtn.addEventListener('click', function() {
	// transform: rotate(180deg);
	imageToggleBtn.classList.toggle('unmasked');
	dpWrapper.classList.toggle('unmasked');
	
	if (dpWrapper.matches('.unmasked')) {
		dpWrapper.querySelector('source[type="image/webp"]').srcset = meMaskedOff;
		dpWrapper.querySelector('source[type="image/jpeg"]').srcset = meMaskedOff.replace('.webp', '.jpg');
		dpWrapper.querySelector('img').src = meMaskedOff.replace('.webp', '.jpg');
		dpTitle.setAttribute('title', 'it\'s me, happy');
	} else {
		dpWrapper.querySelector('source[type="image/webp"]').srcset = meMaskedOn;
		dpWrapper.querySelector('source[type="image/jpeg"]').srcset = meMaskedOn.replace('.webp', '.jpg');
		dpWrapper.querySelector('img').src = meMaskedOn.replace('.webp', '.jpg');
		dpTitle.setAttribute('title', 'it\'s me');
	}
})


// Projects Displaying
const projectTemplate = document.querySelector('[data-project]')
const projectContainer = document.querySelector('[data-projects]')
const PROJECT_URL = '../data/work/projects.json'
const PROJECT_IMAGE_PATH = '../assets/work/'

let projects = []

fetch(PROJECT_URL)
	.then(res => res.json())
	.then(data => {
		projects = data.map(project => {
			const projectCard = projectTemplate.content.cloneNode(true).children[0]

			const projectLink = projectCard.querySelector('[data-project-link]')
			const projectImage = projectCard.querySelector('[data-project-image]')
			const projectTitle = projectCard.querySelector('[data-project-title]')
			const projectDescription = projectCard.querySelector('[data-project-description]')
			const projectYear = projectCard.querySelector('[data-project-year]')
			const projectTag = projectCard.querySelector('[data-project-tag]')

			projectLink.setAttribute('href', project.link)
			projectImage.src = PROJECT_IMAGE_PATH + project.thumb
			projectTitle.textContent = project.name
			projectDescription.textContent = project.description
			projectYear.textContent = project.year
			projectTag.textContent = project.tag

			projectContainer.append(projectCard)
			return { link: project.link, thumb: project.thumb, name: project.name, description: project.description, year: project.year, tag: project.tag, element: projectCard }
		})
	})