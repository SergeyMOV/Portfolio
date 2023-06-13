const aboutButton = document.querySelector('[data-js="button"]');
const homeButton = document.querySelector('homepagebutton')

aboutButton.onclick = function() { 
	window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
}
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
