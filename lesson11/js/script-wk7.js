
//const date = new Date();
//const day = (date.getDay());
//const dayString = (day.toISOString());
//document.querySelector('#time').innerHTML = dayString
const today = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
let path = today.toLocaleDateString('en-uk', options)
document.getElementById("time").textContent = path;




let dayOfWeek;
dayOfWeek = today.getDay();
let message1;
if (dayOfWeek === 5) {
    message1 = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
} 


function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}


document.querySelector('#message1').textContent = message1;


const millsecondsToDays = 86400000;
const days = document.querySelector('#lastVisit');
const lastVisit = localStorage.getItem('lastvisit') || Date.now();

console.log(lastVisit, localStorage);

function setStoredList() {
    localStorage.setItem('lastvisit', today);
}
console.log('lastvisit', today);

let dslv = Math.round((today - lastVisit) / millsecondsToDays);
console.log(dslv);

if (dslv === 1) {
    days.innerHTML = 'It has been ' + dslv + ' day since your last visit to this page';
}
else if (dslv > 1) {
    days.innerHTML = 'It has been ' + dslv + ' days since your last visit to this page';
}

else {
    days.innerHTML = 'Welcome, This is your first visit to this page';
}

localStorage.setItem('lastvisit', Date.now());


let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


let images = document.querySelectorAll('[data-src]') 



function preloadImages(img) {
  const src = img.getAttribute('data-src');
  if(!src){
    return;
  }
  img.src = src;
}


const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 50px 0px"
};



const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return;
    } else{
      preloadImages(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions); 



images.forEach(image => {
  imgObserver.observe(image);
});


  // const numSteps = 20.0;

  // let boxElement;
  // let prevRatio = 0.0;
  // let increasingColor = "#74c69d";
  // let decreasingColor = "rgba(190, 40, 40, ratio)";
  
  // // Set things up
  // window.addEventListener("load", (event) => {
  //   boxElement = document.querySelector("#box");
  
  //   createObserver();
  // }, false);

  // function createObserver() {
  //   let observer;
  
  //   let options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: buildThresholdList()
  //   };
  
  //   observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(boxElement);
  // }

  // function buildThresholdList() {
  //   let thresholds = [];
  //   let numSteps = 20;
  
  //   for (let i=1.0; i<=numSteps; i++) {
  //     let ratio = i/numSteps;
  //     thresholds.push(ratio);
  //   }
  
  //   thresholds.push(0);
  //   return thresholds;
  // }

  // function handleIntersect(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.intersectionRatio > prevRatio) {
  //       entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
  //     } else {
  //       entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
  //     }
  
  //     prevRatio = entry.intersectionRatio;
  //   });
  // }




// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString(undefined, options));
// document.getElementById("#time").innerHTML = 

