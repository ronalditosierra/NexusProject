const tl = gsap.timeline();

tl.to(".title", {
  opacity: 1,
  duration: 1.5,
  y: -10,
  ease: "power3.out"
})
  .to(".subtitle", {
    opacity: 1,
    duration: 1,
    y: -10,
    ease: "power2.out"
  }, "-=1")
  .from(".envelope", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "back.out(1.7)"
  }, "-=0.5");

// CLICK SOBRE
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {

  gsap.to(".envelope::before", {
    rotateX: 180
  });

  gsap.to(".letter-paper", {
    opacity: 1,
    y: -60,
    duration: 1,
    ease: "power3.out"
  });

});
