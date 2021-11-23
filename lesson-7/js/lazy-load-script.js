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