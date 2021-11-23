
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




let dayOfWeek;
dayOfWeek = today.getDay();
let message1;
if (dayOfWeek === 5) {
    message1 = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.';
} 


function toggleMenu() {
    document.getElementById("primarynav").classList.toggle("hide");
}


document.querySelector('#message1').textContent = message1;


const millsecondsToDays = 86400000;
const days = document.querySelector('#lastVisit');
const lastVisit = localStorage.getItem('lastvisit') || Date.now();

console.log(lastVisit, localStorage);

function setStoredList() {
    localStorage.setItem('lastvisit', today);
}
console.log('lastvisit', today);

let dslv = Math.round((today - lastVisit) / millsecondsToDays);
console.log(dslv);

if (dslv === 1) {
    days.innerHTML = 'It has been ' + dslv + ' day since your last visit to this page';
}
else if (dslv > 1) {
    days.innerHTML = 'It has been ' + dslv + ' days since your last visit to this page';
}

else {
    days.innerHTML = 'Welcome, This is your first visit to this page';
}

localStorage.setItem('lastvisit', Date.now());







// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// console.log(event.toLocaleDateString(undefined, options));
// document.getElementById("#time").innerHTML = 

