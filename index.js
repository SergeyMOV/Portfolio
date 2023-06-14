const aboutButton = document.querySelector('[data-js="button"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const x = window.matchMedia("(min-width: 420px)");

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
aboutButton.onclick = function() {
    if(x.matches){
        window.scrollBy({ top: 1923, left: 0, behavior: "smooth" });
    }
    else{
        window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
    }
}
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
