import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysLeft = document.querySelector("span[data-days]");
const hoursLeft = document.querySelector("span[data-hours]");
const minsLeft = document.querySelector("span[data-minutes]");
const secsLeft = document.querySelector("span[data-seconds]");

iziToast.settings({ 
	title: 'Error',
	titleColor: '#fff',
	titleSize: '16px',
	titleLineHeight: '1.5',
	message: 'Please choose a date in the future',
	messageColor: '#fff',
	messageSize: '16px',
	messageLineHeight: '1.5',
	backgroundColor: '#EF4040',
	balloon: false,
	close: true,
	closeOnEscape: true,
	position: 'topRight',
	timeout: 5000,
	animateInside: false,
	progressBarColor: '#B51B1B',
});

let userSelectedDate = 0;
const addLeadingZero = value => String(value).padStart(2, '0');

function outputTimer(days, hours, minutes, seconds) {
	daysLeft.textContent = addLeadingZero(days);
	hoursLeft.textContent = addLeadingZero(hours);
	minsLeft.textContent = addLeadingZero(minutes);
	secsLeft.textContent = addLeadingZero(seconds);
}

function convertMs(ms){
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

	outputTimer(days, hours, minutes, seconds);
}


const startBtnClick = () => {
	const intervalId = setInterval(() => {
		const timeInterval = userSelectedDate - new Date();
		if (timeInterval < 1000) {
			clearInterval(intervalId);
			dateInput.disabled = false;
		}
		convertMs(timeInterval);
	}, 1000);
	startBtn.removeEventListener("click", startBtnClick);
	startBtn.disabled = true;
	dateInput.disabled = true;
}


function toStartTimer() {
  const currentDate = new Date();
	const timeInterval = userSelectedDate - currentDate;
  if (timeInterval < 0) {
		startBtn.disabled = true;
		iziToast.error()
	} else {
		startBtn.disabled = false;
		startBtn.addEventListener("click", startBtnClick)
	}
}


const calendar = flatpickr(dateInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates){
    userSelectedDate = selectedDates[0];
    toStartTimer();
  }
});
