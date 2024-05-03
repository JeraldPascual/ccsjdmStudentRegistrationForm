/* animations.js */


const animations = {
boxAnimation: gsap.to("#box", {
opacity: 0,
repeat: -1,
y: -10,
duration: 2,
yoyo: true,
}),

headingAnimation: gsap.to("#heading", {
opacity: 0.6,
repeat: -1,
yoyo: true,
duration: 0.8
}),

typewriterAnimation: (() => {
const tl = new TimelineMax({ paused: true });
tl.fromTo(".anim-typewriter", 2, {
width: "0",
}, {
width: "20em",
ease: SteppedEase.config(37)
}, 0);
tl.fromTo(".anim-typewriter", 1, {
"border-right-color": "rgba(255,255,255,0.75)"
}, {
"border-right-color": "rgba(255,255,255,0)",
repeat: -1,
ease: SteppedEase.config(30)
}, 0);
tl.play();
return tl;
})()
};

export default animations;