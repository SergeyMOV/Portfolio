const button = document.querySelector('[data-js="button"]');
const buttonText = document.querySelector('[data-js="buttontext"]');
button.addEventListener("mouseover",()=>{
buttonText.style.color="black";
})
button.addEventListener("mouseout",()=>{
	buttonText.style.color="white";
	})