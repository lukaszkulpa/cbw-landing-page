// Set the date we're counting down to
let countDownDate = new Date("Mar 10, 2023 15:33:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
	// Get today's date and time
	let now = new Date().getTime();

	// Find the distance between now and the count down date
	let distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	if (days.toString().length == 1) {
		days = "0" + days;
	}

	if (hours.toString().length == 1) {
		hours = "0" + hours;
	}

	if (minutes.toString().length == 1) {
		minutes = "0" + minutes;
	}

	if (seconds.toString().length == 1) {
		seconds = "0" + seconds;
	}

	// Output the result in an element with id="countdown"
	document.getElementById("countdown").innerHTML =
		days + ":" + hours + ":" + minutes + ":" + seconds;

	// If the count down is over, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "EXPIRED";
	}
}, 1000);
