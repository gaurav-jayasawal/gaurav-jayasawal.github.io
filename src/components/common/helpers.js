export const smoothScrollToElement = (e, elementId) => {
  e.preventDefault();

  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: "smooth" });
};
