const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b4632dbb5d0b503e5f8c44170654d4ef';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp')
    const weathericon = document.querySelector('#icon')

    // document.getElementById("temp").textContent = jsObject.main.temp;
    let imgsrc = 'https://openweather.org/img/w/${jsObject.weather[0].icon}.png';
    let imgalt = jsObject.weather[0].description;

    currentTemp.textContent = jsObject.main.temp.toFixed(0);
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);

//     onst imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
// const desc = jsObject.weather[0].description;  // note how we reference the weather array
// document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
// document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
// document.getElementById('icon').setAttribute('alt', desc);
  });