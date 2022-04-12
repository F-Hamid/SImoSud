"use strict";

document.querySelector(".bckg-video").playbackRate = 0.8;

const elements = document.querySelectorAll(".reveal");

function reveal() {
  var elements = document.querySelectorAll(".reveal");
  for (let i = 0; i < elements.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = elements[i].getBoundingClientRect().top;
    let elementVisible = 5;
    if (elementTop < windowHeight - elementVisible) {
      elements[i].classList.add("active");
    } else {
      elements[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
