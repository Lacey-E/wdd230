const date = new Date();
const finalday = (date.getFullYear());
document.querySelector('#year').innerHTML = finalday


document.querySelector('#time').innerHTML = date.toDateString();
  