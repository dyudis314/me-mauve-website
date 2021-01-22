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
  
  /* Reload on hero text box click */
   function reloadOnClick() {
    const hero = document.querySelector('.hero-text-box');
    hero.addEventListener('click', () => {
      location.reload();
    })
   }
   reloadOnClick();