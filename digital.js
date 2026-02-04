// Select DOM elements
const clock = document.getElementById('clock');
const alarmInput = document.getElementById('alarm');
const setBtn = document.getElementById('set');
const clearBtn = document.getElementById('clear');
const status = document.getElementById('status');
const sound = document.getElementById('sound');

// Set your alarm sound (you can use any mp3 or wav file)
sound.src = 'C:\Users\GCES\Downloads\jeremayjimenez-south-korea-eas-alarm-1966-422162.mp3';

let alarmTime = null;
let alarmTimeout = null;

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    // Check if alarm time matches current time
    if (alarmTime) {
        if (`${hours}:${minutes}` === alarmTime) {
            sound.play();
            status.textContent = 'Alarm ringing!';
            alarmTime = null; // Reset alarm after ringing
        }
    }
}

// Update clock every second
setInterval(updateClock, 1000);

// Set alarm
setBtn.addEventListener('click', () => {
    if (alarmInput.value) {
        alarmTime = alarmInput.value;
        status.textContent = `Alarm set for ${alarmTime}`;
    } else {
        alert('Please select a valid time for the alarm.');
    }
});

// Clear alarm
clearBtn.addEventListener('click', () => {
    alarmTime = null;
    status.textContent = 'No alarm set';
    sound.pause();
    sound.currentTime = 0;
});
