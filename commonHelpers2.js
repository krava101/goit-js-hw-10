import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as r}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form");r.settings({titleColor:"#fff",titleSize:"16px",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#EF4040",balloon:!1,close:!0,closeOnEscape:!0,position:"topRight",timeout:5e3,animateInside:!1});const m=(o,e)=>{const n={message:`✅ Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D"},l={message:`❌ Rejected promise in ${e}ms`,backgroundColor:"#f55858"};let s=!0;return o==="fulfilled"||(s=!1),new Promise((t,a)=>{setTimeout(()=>{s?t(r.show(n)):a(r.show(l))},e)}).then(t=>t).catch(t=>t)},u=()=>{event.preventDefault();const o=event.currentTarget.state.value,e=event.currentTarget.delay.value;m(o,e),i.reset()};i.addEventListener("submit",u);
//# sourceMappingURL=commonHelpers2.js.map