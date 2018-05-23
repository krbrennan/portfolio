
let name = {
  strings: ['Hi I\'m Kevin '],
  typeSpeed: 90,
  startDelay: 1000,
  showCursor: false
}
let occupation = {
  strings: ['^3000 And I\'m a Web Developer '],
  typeSpeed: 90,
  showCursor: false
}

let typed = new Typed('#typed', name);
let typeName = new Typed('#type-name', occupation);


document.addEventListener("scroll", function() {
  let nav = document.getElementById('navbar');
  nav.classList.toggle('sticky', window.scrollY > 300);
});
