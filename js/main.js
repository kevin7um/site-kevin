"use strict";AOS.init({offset:120,delay:300,duration:700,once:!0});var header=document.getElementById("js-header");function fixedMenu(){80<window.pageYOffset?header.classList.add("fixed-menu"):header.classList.remove("fixed-menu")}document.addEventListener("scroll",fixedMenu);var btnMenuMobile=document.getElementById("js-btnMenuMobile");function removeMenu(){btnMenuMobile.classList.remove("is-active"),document.documentElement.classList.remove("menuOpened")}console.log(btnMenuMobile),btnMenuMobile.addEventListener("click",function(){btnMenuMobile.classList.toggle("is-active"),document.documentElement.classList.toggle("menuOpened")});var linksSection=document.querySelectorAll(".js-nav-menu li a");function scrollToSection(e){var e=e.currentTarget.getAttribute("id"),e=document.querySelector(e).offsetTop,o=null,i=e;window.requestAnimationFrame(function e(n){var n=n-(o=o||n),t=window.pageYOffset;window.scrollTo(0,t+(i-t)*n/1e3),n<1e3&&window.requestAnimationFrame(e)}),removeMenu()}linksSection.forEach(function(e){e.addEventListener("click",scrollToSection)});