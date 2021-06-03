import gsap from "gsap";

export const show = (element) => {
  gsap.to(element, { transform: "scaleX(1)" });
};

export const hide = (element) => {
  gsap.to(element, { transform: "scaleY(0)" });
};
