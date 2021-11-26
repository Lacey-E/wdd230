const apiURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b4632dbb5d0b503e5f8c44170654d4ef";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });