/* Nav Sidebar slide */

const navSlide = () => {
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav links li');

  // When burger is clicked, nav-active class is toggled on/off.
burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');

    });
  }
navSlide();


/* When user scrolls down, hide navbar. When user scrolls up, show navbar. */
(function(){

  let doc = document.documentElement;
  let w   = window;

  let curScroll;
  let prevScroll = w.scrollY || doc.scrollTop;
  let curDirection = 0;
  let prevDirection = 0;


  let header = document.querySelector('nav');
  let toggled;
  let threshold = 200;

  const checkScroll = function() {
      curScroll = w.scrollY || doc.scrollTop;
      if(curScroll > prevScroll) {
          // scrolled down
          curDirection = 2;
      }
      else {
          //scrolled up
          curDirection = 1;
      }

      if(curDirection !== prevDirection) {
          toggled = toggleHeader();
      }

      prevScroll = curScroll;
      if(toggled) {
          prevDirection = curDirection;
      }
  };

  const toggleHeader = function() { 
      toggled = true;
      if(curDirection === 2 && curScroll > threshold) {
          header.classList.add('hide');
      }
      else if (curDirection === 1) {
          header.classList.remove('hide');
      }
      else {
          toggled = false;
      }
      return toggled;
  };

  window.addEventListener('scroll', checkScroll);

})();


/* Reload on hero text box click */
 function reloadOnClick() {
  const hero = document.querySelector('.hero-text-box');
  hero.addEventListener('click', () => {
    location.reload();
  })
 }
 reloadOnClick();