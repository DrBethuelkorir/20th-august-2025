// Set your launch date here
const launchDate = new Date("september 30, 2025 00:00:00").getTime();

// Select all counter elements
const counters = document.querySelectorAll(".counter");

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    counters[0].textContent = "0";
    counters[1].textContent = "0";
    counters[2].textContent = "0";
    counters[3].textContent = "0";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  counters[0].textContent = days;
  counters[1].textContent = hours;
  counters[2].textContent = minutes;
  counters[3].textContent = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);

// Initial call to avoid delay
// updateCountdown();
