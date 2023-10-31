gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({
  defaults: { duration: 1, ease: "smooth" },
});
timeline
  .from("#profile", { opacity: 0 })
  .from("#skillSection", { scale: 0, x: "-100%" })
  .from("#skillList li", { opacity: 0, stagger: 0.15 })
  .fromTo("svg", { x: "-100%" }, { x: "100%", duration: 1.7 }, "<2.5")
  .from("#ray", { opacity: 0, duration: 0.5 }, "<")
  .from("nav div", { opacity: 0 }, "<");

const pvElements = document.querySelectorAll("#pv");
const pdElements = document.querySelectorAll("#pd");
pvElements.forEach((pvElement) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: pvElement,
        start: "top bottom",
        end: "bottom center",
      },
    })
    .from(pvElement, { duration: 1, opacity: 0, scale: 0 });
});
pdElements.forEach((pdElement) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: pdElement,
        start: "top center",
        end: "bottom center",
      },
    })
    .from(pdElement, { duration: 1.2, opacity: 0, x: "-100%" });
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#projectsTitle",
      start: "top center",
      end: "bottom center",
    },
  })
  .from("#projectsTitle", { duration: 1, opacity: 0 });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#projectsTitle",
      start: "top bottom",
      end: "bottom center",
    },
  })
  .to("#projectsTitle", {
    duration: 1,
    opacity: 0.5,
  });
