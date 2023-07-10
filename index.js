const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const certificateButton = document.querySelector('[data-js="Certificate"]');
const portfolioButton = document.querySelector(".portf");
const cvButton = document.querySelector('[data-js="CV"]');
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
};
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

    aboutButton.onclick = function() {
        const page2= document.querySelector(".Aboutme");
        page2.scrollIntoView({behavior: "smooth"});
        document.querySelector("li.About").style.borderRadius="8px 8px";
};
portfolioButton.onclick = function(){
const page3= document.querySelector(".portfolio");
page3.scrollIntoView(({behavior:"smooth"}));
document.querySelector("li.About").style.borderRadius="8px 8px";
};

    document.addEventListener("scroll", ()=>{
        if(x.matches && y.matches && window.scrollY >=1550 && window.scrollY<2800){
            document.querySelector("li.About").style.border="1px solid white";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 10px 10px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none"; 
            homeButton.style.border="none";
            homelink.style.color="white";
            header.style.backgroundColor="#0b3351";

        }
        else if(x.matches && y.matches & window.scrollY>=3900){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.transition="0.5s"; 
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba";
            header.style.backgroundColor="#1d5b89";
    
        }
        else if(x.matches && y.matches && window.scrollY<=1000){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.About>a").style.transition="1s";
            homeButton.style.border="1px solid";
            homelink.style.color="skyblue";
            header.style.backgroundColor="#081b29";
        }
        else if(n.matches && c.matches && window.scrollY<500){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            homeButton.style.border="1px solid";
            header.style.backgroundColor="transparent";
        }
        else if(n.matches && c.matches & window.scrollY>=700 && window.scrollY<=1500){
            document.querySelector("li.About").style.border="1px solid";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="0.5s";
            document.querySelector("li.About").style.boxShadow ="2px 5px 13px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";    
            homeButton.style.border="none";
        }
        else if(n.matches && c.matches && window.scrollY>1500){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba";
        }
        else if(m.matches && c.matches  || ml.matches && c.matches && window.scrollY>=1800){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.transition="0.5s"; 
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba"; 
        }
    })
