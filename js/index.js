AOS.init();
const animation_1 = () => document.querySelector("#intro_logo").classList.add("d-none"),
      animation_2 = () => {
        document.querySelector("#hero").classList.add("fade_in");
        document.querySelector("#img_hero_1").classList.add("img_left_right");
        document.querySelector("#img_hero_2").classList.add("img_right_left");
      },
      animation_3 = () => {
        document.querySelector("#span_icon").classList.remove("d-none");
        document.querySelector("body").classList.remove("scroll-y-none");
      };
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("body").classList.add("scroll-y-none");
  document.querySelector("#img_hero_1").classList.remove("img_left_right");
  document.querySelector("#img_hero_2").classList.remove("img_right_left");
  setTimeout(animation_1, 0);
  setTimeout(animation_2, 0);
  setTimeout(animation_3, 0);
});