/* preloader.js */


const preloaderText = document.getElementById("loadingText");
const mainContent = document.querySelector("main");

gsap.set(mainContent, { visibility: "hidden" });

const tl = gsap.timeline({ repeat: -1 });
tl.to(preloaderText, { duration: 0.5, text: "Loading" })
.to(preloaderText, { duration: 0.5, text: "Loading." })
.to(preloaderText, { duration: 0.5, text: "Loading.." })
.to(preloaderText, { duration: 0.5, text: "Loading..." });

window.addEventListener("load", () => {
tl.kill();
gsap.to("#preloader", { duration: 0.5, opacity: 0, onComplete: () => {
document.getElementById("preloader").style.display = "none";
gsap.set(mainContent, { visibility: "visible" });
gsap.from(mainContent, { duration: 1, opacity: 0, delay: 0.1 });
}});
});

export { preloaderText, mainContent };