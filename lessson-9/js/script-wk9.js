
//const date = new Date();
//const day = (date.getDay());
//const dayString = (day.toISOString());
//document.querySelector('#time').innerHTML = dayString
const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();
let message1;
if (dayOfWeek === 5) {
    message1 = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
} 

document.getElementById("time").innerHTML = today.toDateString();

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}


document.querySelector('#message1').textContent = message1;

// WebFont.load({
//     google: {
//       families: [
//       'Roboto' ] }});




// function windChillCalculator(){
//     var windchill 
//     document.querySelector('#product').value = bmi;
// }


// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString(undefined, options));
// document.getElementById("#time").innerHTML = 

