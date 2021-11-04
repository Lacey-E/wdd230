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
    