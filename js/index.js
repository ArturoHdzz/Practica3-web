AOS.init();

const delay1 = 500;
const delay2 = delay1 + 300; 
const delay3 = delay2 + 300 + 300; 

const animation_1 = () => {
  document.querySelector("#intro_logo").classList.add("d-none");
};

const animation_2 = () => {
  document.querySelector("#hero").classList.add("fade_in");
  document.querySelector("#img_hero_1").classList.add("img_left_right");
  document.querySelector("#img_hero_2").classList.add("img_right_left");
};

const animation_3 = () => {
  document.querySelector("#span_icon").classList.remove("d-none");
  document.querySelector("body").classList.remove("scroll-y-none");
};

const favicon = document.querySelector("#favicon");
const logo = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ? "assets/crown_logo_white.webp"
  : "assets/crown_logo.webp";
favicon.href = logo;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").classList.add("scroll-y-none");
  document.querySelector("#img_hero_1").classList.remove("img_left_right");
  document.querySelector("#img_hero_2").classList.remove("img_right_left");

  setTimeout(animation_1, delay1);
  setTimeout(animation_2, delay2);
  setTimeout(animation_3, delay3);
});