let secondsHand = document.getElementById("seconds-hand");
let minutesHand = document.getElementById("minutes-hand");
let hoursHand = document.getElementById("hours-hand");

function getTime() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let timeInterval = 6;
    secondsHand.style.transform = "rotate(" + (seconds * timeInterval) + "deg)";
    minutesHand.style.transform = "rotate(" + (minutes * timeInterval) + "deg)";
    hoursHand.style.transform = "rotate(" + hours * 30 + "deg)";

   }
   setInterval(getTime, 100);

getTime();