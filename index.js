const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const x = window.matchMedia("(min-width: 420px)");
const y = window.matchMedia("(orientation: portrait)");

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}
else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
aboutButton.onclick = function() {
    if(x.matches && y.matches){
        window.scrollBy({ top: 2250, left: 0, behavior: "smooth" });
        document.querySelector("li.About").style.border="1px solid white";
        document.querySelector("li.About").style.borderRadius="8px 8px";
        homeButton.style.border="none";
    }
    else{
        window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
    }
}
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if(x.matches && y.matches){
    document.querySelector("li.About").style.border="none";
    homeButton.style.border="1px solid white";
}
}
homeButton.addEventListener("mouseover", ()=>{
homelink.style.color="skyblue";
homelink.style.transition = "1s";
});
homeButton.addEventListener("mouseout", ()=>{
    homelink.style.color="white";
    });
