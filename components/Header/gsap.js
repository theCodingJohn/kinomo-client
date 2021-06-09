import gsap from "gsap";

export const showLinks = (element) => {
  gsap.to(element, { display: "flex" });
  gsap.to(element, {
    transform: "translateY(0)",
    delay: 0.3,
    duration: 0.3,
    boxShadow: "box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)",
  });
};

export const hideLinks = (element, translateYValue) => {
  gsap.to(element, { display: "none", delay: 0.3 });
  gsap.to(element, {
    transform: translateYValue,
    duration: 0.3,
    boxShadow: "unset",
  });
};
