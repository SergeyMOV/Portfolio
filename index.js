const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const header = document.querySelector('[data-js="Header"]');
const x = window.matchMedia("(min-width: 420px)");
const y = window.matchMedia("(orientation: portrait)");
const n = window.matchMedia("(min-width: 768px)");
const c = window.matchMedia("(orientation: landscape)");
const m = window.matchMedia("(min-width: 1280px)");
const s = window.matchMedia("(orientation: landscape)");
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
        window.scrollBy({ top: 2300, left: 0, behavior: "smooth" });
        document.querySelector("li.About").style.border="1px solid white";
        document.querySelector("li.About").style.borderRadius="8px 8px";
        homeButton.style.border="none";
        header.style.backgroundColor="#0b3351";
        header.style.transition="1s";
    }
    else if (s.matches && m.matches){
        window.scrollBy({ top: 1100, left: 0, behavior: "smooth" });
    }
    else if(c.matches && n.matches){
        window.scrollBy({ top: 1200, left: 0, behavior: "smooth" });
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
    header.style.backgroundColor="transparent";
    header.style.transition="1s";
}
}
homeButton.addEventListener("mouseover", ()=>{
homelink.style.color="skyblue";
homelink.style.transition = "1s";
});
homeButton.addEventListener("mouseout", ()=>{
    homelink.style.color="white";
    });
