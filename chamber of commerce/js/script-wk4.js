
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
var time = today.getHours() + ":" + today.getMinutes();

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}


const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=7.376736&lon=3.939786&appid=b4632dbb5d0b503e5f8c44170654d4ef';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById("temp").textContent = jsObject.current.temp;
    // currentTemp.textContent = jsObject.main.temp.toFixed(0);
    document.getElementById("current").textContent = jsObject.current.weather[0].description
    document.getElementById("humidity").textContent = jsObject.current.humidity;
    document.getElementById("message").textContent = jsObject.current.temp;
    // document.getElementById("humidity").textContent = jsObject.main.humidity
    
    
    
     const list = jsObject.current.daily;
   
     let fiveDays = [];
        for (let i = 0; i < list.length;) 
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
       


        
        document.getElementById("data1").textContent = `${fiveDays[0].current.temp}°F`
        document.getElementById("data2").textContent = `${fiveDays[1].current.temp}°F`
        document.getElementById("data3").textContent = `${fiveDays[2].current.temp}°F`
        
        
        const imageLink = "https://openweathermap.org/img/w/";
        document.getElementById("img1").setAttribute("src", `${imageLink}${fiveDays[0].current.weather[0].icon}.png`)
        document.getElementById("img2").setAttribute("src", `${imageLink}${fiveDays[1].current.weather[0].icon}.png`)
        document.getElementById("img3").setAttribute("src", `${imageLink}${fiveDays[2].current.weather[0].icon}.png`)
        
        
        document.getElementById("img1").setAttribute("alt", fiveDays[0].current.weather[0].description)
        document.getElementById("img2").setAttribute("alt", fiveDays[1].current.weather[0].description)
        document.getElementById("img3").setAttribute("alt", fiveDays[2].current.weather[0].description)
        
 



 });

















// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString(undefined, options));
// document.getElementById("#time").innerHTML = 

