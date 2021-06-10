import gsap from "gsap";

export const showLinks = (element) => {
  gsap.to(element, { display: "flex" });
  gsap.to(element, {
    opacity: 1,
    delay: 0.01,
    duration: 0.3,
  });
};

export const hideLinks = (element) => {
  gsap.to(element, { display: "none", delay: 0.01 });
  gsap.to(element, {
    opacity: 0,
    duration: 0.3,
  });
};
