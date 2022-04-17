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
	pages = document.querySelectorAll(".page");

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
}

navbarItems.forEach(function (item, index) {
  item.addEventListener("click", activatePage, scrollToTop);
});

// AOS
AOS.init({
  offset: 200,
  duration: 600,
  easing: "ease-in-sine",
  delay: 200,
  once: true,
  disable: "mobile",
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
	workHeaderLead.textContent =
	  "Summary of work experience about the various roles I have worked on for the past years.";
  } else {
	workToggleText.textContent = "Experience";
	workHeaderLead.textContent =
	  "Collection of projects, from websites to webapps and everything tech. Includes experiments and self-discoveries.";
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
