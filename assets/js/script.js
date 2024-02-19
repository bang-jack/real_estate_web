'use strict';

/**
 * navbar toggle in mobile
 */

const /** {nodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {nodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));