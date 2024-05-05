/* index.js */
import { preloaderText, mainContent } from "./preloader.js";
import animations from "./animation.js";

/* Redirecting */
document.getElementById("registrationButton").addEventListener("click", function() {
window.location.href = "src/landingPage/dist/index.html";
});

animations.boxAnimation.play();
animations.headingAnimation.play();
animations.typewriterAnimation.play();

gsap.from(".footer-text", {
scrollTrigger: {
trigger: ".footer-text",
start: "top 90%",
toggleActions: "restart none none reset",
},
opacity: 0,
y: -50,
duration: 1,
});