/* The event Section */
// The End of the year date to countdown to
let newYear = new Date("1 Jan 2022").getTime();

let counter = setInterval(function () {
    // Get date now
    let dateNow = new Date().getTime();

    // Get the time left from now to the new year
    let timeleft = newYear - dateNow;

    // days
    let days = timeleft / (1000 * 60 * 60 * 24);
    let completeDays = Math.trunc(days);

    // hours
    let hours = (days - completeDays) * 24;
    let completeHours = Math.trunc(hours);

    // minutes
    let minutes = (hours - completeHours) * 60;
    let completeMinutes = Math.trunc(minutes);

    // seconds
    let seconds = (minutes - completeMinutes) * 60;
    let completeSeconds = Math.trunc(seconds);

    if (timeleft <= 0) {
        clearInterval(1);
        document.querySelector(".days").innerHTML = "00";
        document.querySelector(".hours").innerHTML = "00";
        document.querySelector(".minutes").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "00";

    } else {
        document.querySelector(".days").innerHTML = completeDays < 10? "0" + completeDays : completeDays;
        document.querySelector(".hours").innerHTML = completeHours < 10? "0" + completeHours: completeHours;
        document.querySelector(".minutes").innerHTML = completeMinutes < 10? "0" + completeMinutes: completeMinutes;
        document.querySelector(".seconds").innerHTML = completeSeconds < 10? "0" + completeSeconds: completeSeconds;
    }

}, 1000)


// =======================================


/*
    ___*__NOTE__*___

    => To get the scroll top of an element
    - element.offsetTop
*/

let body = document.querySelector("html body");

// Edit the scrollbar
body.onscroll = function() {

    let scroll = window.scrollY;

    if (scroll > 0) {
        body.classList.add("show");
    } else {
        body.classList.remove("show");
    }
}

// =================================



/* Skills Section */
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.addEventListener("scroll", function () {
    
    if (window.scrollY >= section.offsetTop - 50) {
        spans.forEach(function (span) {
            span.style.width = span.getAttribute("data-width")
        });
    } else {
        spans.forEach(function (span) {
            span.style.width = "0"
        })
    }
})

// ========================================


/* Stats */

let nums = document.querySelectorAll(".box .num");
let statsSection = document.querySelector(".stats");
let started = false; // function started? No // Important concept

function startCount(element) {
    let goal = element.dataset.num;
    let counter = setInterval(() => {
        element.textContent++;
        if (element.textContent >= +goal) {
            clearInterval(counter);
        }
    }, 4000 / goal); // another trick for time
}

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 100) {
        if (!started) {
            nums.forEach( (num) => startCount(num));
        }
        started = true;
    }
}
