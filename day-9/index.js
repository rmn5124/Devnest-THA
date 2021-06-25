'use strict';
const seatsRemaining = document.querySelector('.seats-remaining');
const seatsOccupied = document.querySelector('.seats-occupied');
const seatContainer = document.querySelector('.container');
let seatsOccupiedCount = 0;
let seatsRemainingCount = 50;

seatContainer.addEventListener('click', e => {
  if (e.target.classList.contains('seat')) {
    if (e.target.classList.contains('booked')) {
      alert('Seat Already Booked');
    } else {
      const confirmation = confirm('Are You sure about booking this seat?');
      if (confirmation == true) {
        e.target.classList.add('booked');
        seatsOccupiedCount++;
        seatsRemainingCount--;
        seatsOccupied.innerHTML = seatsOccupiedCount;
        seatsRemaining.innerHTML = seatsRemainingCount;
      }
    }
  }
});

function getSeat() {
  if (localStorage.getItem('seatsRemaining') === null) {
    seatsRemaining.textContent = '50';
  } else {
    seatsRemaining.innerHTML = localStorage.getItem('seatsRemainingCount');
  }
}

// Set Name
function setSeat(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('seatsRemainingCount', e.target.innerText);
      seatsRemaining.blur();
    }
  } else {
    localStorage.setItem('seatsRemainingCount', e.target.innerHTML);
  }
}

// Get Focus
function getBooking() {
  if (localStorage.getItem('seatsOccupied') === null) {
    seatsOccupied.textContent = '0';
  } else {
    seatsOccupied.textContent = localStorage.getItem('seatsOccupiedCount');
  }
}

// Set Focus
function setBooking(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('seatsOccupiedCount', e.target.innerHTML);
      seatsOccupied.blur();
    }
  } else {
    localStorage.setItem('seatsOccupiedCount', e.target.innerHTML);
  }
}

getSeat();
getBooking();
