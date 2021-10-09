
//const date = new Date();
//const day = (date.getDay());
//const dayString = (day.toISOString());
//document.querySelector('#time').innerHTML = dayString

var date = new Date
document.getElementById("time").innerHTML = date.toDateString();

function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}

// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString(undefined, options));
// document.getElementById("#time").innerHTML = 

