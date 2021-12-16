const today = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
let path = today.toLocaleDateString('en-uk', options)
document.getElementById("time").textContent = path;
var time = today.getHours() + ":" + today.getMinutes();

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}





const requestURL = 'https://lacey-e.github.io/wdd230/chamber%20of%20commerce/business.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {

      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let bday = document.createElement("p");
      let bplace = document.createElement("p");
      let image = document.createElement("img");

  
      card.setAttribute("class", `order${prophets[i].order}`)
      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      bday.textContent = `Birth Date: ${prophets[i].birthdate}`;

      
      bplace.textContent = `Birth Place: ${prophets[i].birthplace}`;
      image.setAttribute("src", prophets[i].imageurl);
      image.setAttribute("alt", `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`);
      card.appendChild(h2);
      card.appendChild(bday);
      card.appendChild(bplace);
      card.appendChild(image);

      document.querySelector("div.cards").appendChild(card);
      
    }
  });


