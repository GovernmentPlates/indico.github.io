/*
* slides.js
*
* Basically: the script that handles the slide-by-slide views for those
* cool animations.
*/

"use strict";

const observer = new IntersectionObserver((slides) => {
    slides.forEach((slide) => {
        slide.target.classList.toggle('show', slide.isIntersecting);
    });
});

const slides = document.querySelectorAll('.slide-section');
slides.forEach((e) => observer.observe(e));
