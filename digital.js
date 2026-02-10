const clock = document.getElementById("clock");
const alarmInput = document.getElementById("alarm");
const setBtn = document.getElementById("set");
const clearBtn = document.getElementById("clear");
const statusText = document.getElementById("status");

// Create audio object



let alarmTime = null;
let alarmActive = false;
const alarmSound = new Audio("C:\dd_web\Jailer - Rajinikanth Intro Bgm.mp3");

// Update clock every second
setInterval(() => {
    const now = new Date();

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;

    // Check alarm
    if (alarmActive && alarmTime === `${hours}:${minutes}`) {
        alarmSound.currentTime = 0;
        alarmSound.play().catch(err => console.error("Failed to play alarm sound:", err));
        statusText.textContent = "⏰ alarm ringing!";
        alarmActive = false;
    }
}, 1000);

// Set alarm
setBtn.addEventListener("click", () => {
    if (alarmInput.value === "") {
        statusText.textContent = "please set a time";
        return;
    }

    alarmTime = alarmInput.value;
    alarmActive = true;
    statusText.textContent = `alarm set for ${alarmTime}`;
});

// Clear alarm
clearBtn.addEventListener("click", () => {
    alarmSound.pause();
    alarmSound.currentTime = 0;

    alarmTime = null;
    alarmActive = false;
    alarmInput.value = "";
    statusText.textContent = "no alarm set";
});
