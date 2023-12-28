import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(".form");

iziToast.settings({ 
	titleColor: '#fff',
	titleSize: '16px',
	titleLineHeight: '1.5',
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
});

const createPromis = (state, delay) =>{
  const resolveValue = {message: `✅ Fulfilled promise in ${delay}ms`, backgroundColor: '#59A10D'};
  const rejectValue = {message: `❌ Rejected promise in ${delay}ms`, backgroundColor: '#f55858'};
  let shouldResolve = true;
  state === "fulfilled" ? shouldResolve : shouldResolve = false;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve(iziToast.show(resolveValue)) : reject(iziToast.show(rejectValue));
	  }, delay);
  })
  .then(v => v)
	.catch(er => er);
}

const formSubmit = () => {
  event.preventDefault();
  const state = event.currentTarget.state.value;
  const delay = event.currentTarget.delay.value;
  createPromis(state, delay);
  form.reset();
}

form.addEventListener("submit", formSubmit)