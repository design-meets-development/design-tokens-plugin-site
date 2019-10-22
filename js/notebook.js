const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

let last_known_scroll_position = 0;
let ticking = false;
let sticked = false;
let nav = document.getElementById('pluginNav')

function doSomething(scroll_pos) {
  if(scroll_pos>200 && !sticked){
    nav.classList.remove("hidden");
    sticked=true;
  }
  if(scroll_pos<200 && sticked){
    nav.classList.add("hidden");
    sticked = false;
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

new SimpleLightbox({elements: '.lightBoxVideoLink'});