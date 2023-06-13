const aboutButton = document.querySelector('[data-js="button"]');
const homeButton = document.querySelector('[data-js="homebt"]');

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

aboutButton.onclick = function() { 
	window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
}
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
