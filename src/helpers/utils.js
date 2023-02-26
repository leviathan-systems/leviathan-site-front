export function scrollTo(id) {    
  let element = document.querySelector(id);
  let margin = 100;

  let pos = element.offsetTop - margin;

  window.scrollTo(0, pos);
}