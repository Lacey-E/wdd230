const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b4632dbb5d0b503e5f8c44170654d4ef';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    const currentTemp = document.querySelector('#current-temp')
    
    document.getElementById("temp").textContent = jsObject.main.temp;
    // currentTemp.textContent = jsObject.main.temp.toFixed(0);
    document.getElementById("current").textContent = jsObject.weather[0].description
    document.getElementById("temp").textContent = jsObject.main.temp_max;
    document.getElementById("speed").textContent = jsObject.wind.speed;
    document.getElementById("humidity").textContent = jsObject.main.humidity

    let t = parseInt(document.querySelector('#temp').innerHTML);
    
    let speed = parseInt(document.querySelector('#speed').innerHTML);
        
    let windchill;
    if (t <= 50 && speed >= 3) {
        windchill = (35.74 + (0.6215 * t) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * t * Math.pow(speed, 0.16))).toFixed(1);
    
    } 
        else{
            windchill = "N/A"; 
        }   
        document.querySelector('#windchill').textContent = windchill;

});

const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b4632dbb5d0b503e5f8c44170654d4ef';
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecast) => {
        console.log(forecast)

        const list = forecast.list

        // Declare an empty array to store the returned value from the for loop that will get the five forecasts based on time (18:00:00)
        let fiveDays = [];
        for (let i = 0; i < list.length; i++) 
        {
            if (list[i].dt_txt.includes("18:00:00")) {
                fiveDays.push(list[i])
            }
        }

        // Define a function to convert the unix date to human date format
        // the parameter will the "dt" from fiveDays list in unix format
        function unixToDate(dt) {
            const miliseconds = dt * 1000
            const dateObject = new Date(miliseconds)
            const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
            return weekDay
        }

        document.getElementById("week1").textContent = unixToDate(fiveDays[0].dt);
        document.getElementById("week2").textContent = unixToDate(fiveDays[1].dt);
        document.getElementById("week3").textContent = unixToDate(fiveDays[2].dt);
        document.getElementById("week4").textContent = unixToDate(fiveDays[3].dt);
        document.getElementById("week5").textContent = unixToDate(fiveDays[4].dt);


        
        document.getElementById("data1").textContent = `${fiveDays[0].main.temp}°F`
        document.getElementById("data2").textContent = `${fiveDays[1].main.temp}°F`
        document.getElementById("data3").textContent = `${fiveDays[2].main.temp}°F`
        document.getElementById("data4").textContent = `${fiveDays[3].main.temp}°F`
        document.getElementById("data5").textContent = `${fiveDays[4].main.temp}°F`

        
        const imageLink = "https://openweathermap.org/img/w/";
        document.getElementById("img1").setAttribute("src", `${imageLink}${fiveDays[0].weather[0].icon}.png`)
        document.getElementById("img2").setAttribute("src", `${imageLink}${fiveDays[1].weather[0].icon}.png`)
        document.getElementById("img3").setAttribute("src", `${imageLink}${fiveDays[2].weather[0].icon}.png`)
        document.getElementById("img4").setAttribute("src", `${imageLink}${fiveDays[3].weather[0].icon}.png`)
        document.getElementById("img5").setAttribute("src", `${imageLink}${fiveDays[4].weather[0].icon}.png`)

        
        document.getElementById("img1").setAttribute("alt", fiveDays[0].weather[0].description)
        document.getElementById("img2").setAttribute("alt", fiveDays[1].weather[0].description)
        document.getElementById("img3").setAttribute("alt", fiveDays[2].weather[0].description)
        document.getElementById("img4").setAttribute("alt", fiveDays[3].weather[0].description)
        document.getElementById("img5").setAttribute("alt", fiveDays[4].weather[0].description)
    

     })

// Getting information from JSON
// const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
// // Fetching to get the events 
// fetch(requestURL)
//     .then(function (response) {
//     return response.json();
//     })

//     .then(function (jsonObject) {
//         // Create a list from JSON file
//         const towns = jsonObject ["towns"]
//         getInformation(towns, 6)
        
//     });

// // Function that will iterate through the Towns list and get events of that town
// function getInformation (list, index){
//     const events = list[index].events
//     for (let i = 0; i < events.length; i ++) {
//         let event = document.createElement("p")
//         event.textContent = events[i]
//         document.querySelector("section.events").appendChild(event)
//     }














    