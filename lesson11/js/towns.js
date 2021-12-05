
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject){
    const towns = jsonObject ["towns"];

    getInfo(towns, 2);
    getInfo(towns, 6);
    getInfo(towns, 0);
  });

function getInfo(list, index) {
  let card = document.createElement("article");
  let h2 = document.createElement("h2");
  let content = document.createElement("div");
  let motto = document.createElement("p");
  let year = document.createElement("p");
  let population = document.createElement("p");
  let rain = document.createElement("p");
  let image = document.createElement("img");
  let div = document.createElement("div");

  h2.textContent = list[index].name;
  motto.textContent = list[index].motto;
  year.textContent = `Year founded: ${list[index].yearFounded}`;
  population.textContent = `Population: ${list[index].currentPopulation}`;
  rain.textContent = `Annual Rain Fall: ${list[index].averageRainfall}`;

  card.setAttribute("class", `town${index}`);
  content.setAttribute("class", "content");
  motto.setAttribute("class", "motto");
  div.setAttribute("class", "image");

  image.setAttribute("src", `images/${list[index].photo}`);
  image.setAttribute("alt", `${list[index].name}`);

  content.appendChild(h2);
  content.append(motto);
  content.appendChild(year);
  content.appendChild(population);
  content.appendChild(rain);
  card.appendChild(content);
  div.appendChild(image);
  card.appendChild(div);
  
  document.querySelector("section.town").appendChild(card);
};


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






















