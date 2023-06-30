const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const Certificatebutton = document.querySelector(".Certificate");
const header = document.querySelector('[data-js="Header"]');
const x = window.matchMedia("(min-width: 420px)");
const y = window.matchMedia("(orientation: portrait)");
const n = window.matchMedia("(min-width: 768px)");
const c = window.matchMedia("(orientation: landscape)");
const m = window.matchMedia("(min-width: 1024px)");
const ml = window.matchMedia("(min-width: 1280px)");

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
        document.querySelector("li.About").style.border="2px solid white";
        document.querySelector("li.About").style.borderRadius="8px 8px";
        homeButton.style.border="none";
        header.style.backgroundColor="#0b3351";
        header.style.transition="1s";
    }
    else if (c.matches && ml.matches){
        window.scrollBy({ top: 1100, left: 0, behavior: "smooth" });
        document.querySelector("li.About").style.border="1px solid white";
        document.querySelector("li.About").style.transition="0.3s";
    }
    else if(c.matches && n.matches){
        window.scrollBy({ top: 750, left: 0, behavior: "smooth" });
    }
    else{
        window.scrollBy({ top: 900, left: 0, behavior: "smooth" });
    }
}

homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if(x.matches && y.matches){
    document.querySelector("li.About").style.border="none";
    homeButton.style.border="2px solid white";
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

Certificatebutton.addEventListener("click",()=>{
    if(ml.matches && c.matches || m.matches && c.matches){
    Certificatebutton.style.boxShadow= "0px 0px";
    Certificatebutton.style.transform="scale(1)";
    Certificatebutton.style.transition="0.5s";
    Certificatebutton.style.color="black";
}
else if(n.matches && c.matches){
    Certificatebutton.style.transform="scale(0.9)";
    Certificatebutton.style.transition="0.5s";
    Certificatebutton.style.color="black";
    Certificatebutton.style.boxShadow= "0px 0px";
}
})

    document.addEventListener("scroll", ()=>{
        if(x.matches && y.matches && window.scrollY >=1100){
            document.querySelector("li.About").style.border="1px solid white";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 10px 10px 5px #0985ba";
            homeButton.style.border="none";
            homelink.style.color="white";
        }
        else if(x.matches && y.matches && window.scrollY<1000){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.About>a").style.transition="1s";
            homeButton.style.border="1px solid";
            homelink.style.color="skyblue";   
        }
        else if(n.matches && c.matches && window.scrollY<500){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            homeButton.style.border="1px solid";
            homelink.style.color="skyblue";
        }
        else if(n.matches && c.matches && window.scrollY>=300){
            document.querySelector("li.About").style.border="1px solid";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="0.5s";
            document.querySelector("li.About").style.boxShadow ="2px 5px 13px 5px #0985ba";
            homeButton.style.border="none";
            homelink.style.color="white";
        }
    })
