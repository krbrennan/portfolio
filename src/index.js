
let name = {
  strings: ['Hi I\'m Kevin Brennan '],
  typeSpeed: 90,
  startDelay: 1000,
  showCursor: false
}
let occupation = {
  strings: ['^4000 And I\'m a Web Developer '],
  typeSpeed: 90,
  showCursor: false
}

let typed = new Typed('#typed', name);
let typeName = new Typed('#type-name', occupation);

document.addEventListener("scroll", function() {
  let viewHeight = document.querySelector('.section_1').clientHeight;
  let nav = document.getElementById('navbar');
  nav.classList.toggle('sticky', window.scrollY > viewHeight);
});


// Smooth Scrolling //
let about_link = document.getElementById('to-about');
let about_projects = document.getElementById('to-projects');
let project_section = document.getElementById('project-showcase');
let about_section = document.getElementById('about-me');

// let handleClick = function(event) {
//   event.preventDefault();
//   smoothScroll(project_section);
// };

// about_projects.addEventListener("click", handleClick);

about_projects.scrollIntoView({
  behavior: 'smooth'
});
