const aboutButton = document.querySelector('[data-js="button"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
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
        window.scrollBy({ top: 2250, left: 0, behavior: "smooth" });
    }
    else{
        window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
    }
}
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
homeButton.addEventListener("mouseover", ()=>{
homelink.style.color="skyblue";
homelink.style.transition = "1s";
});
homeButton.addEventListener("mouseout", ()=>{
    homelink.style.color="white";
    });
