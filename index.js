const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const certificateButton = document.querySelector('[data-js="Certificate"]');
const portfolioButton = document.querySelector(".portf");
const cvButton = document.querySelector('[data-js="CV"]');
const contactButton=document.querySelector('[data-js="contactLink"]');
const projectEmployeeButton=document.querySelector(".employee-app-card-front")
const employerAppInner = document.querySelector(".employee-app-card-inner")
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
document.querySelector("li.portf").style.borderRadius="8px 8px";
};

contactButton.onclick = function(){
const page4 = document.querySelector(".contact");
page4.scrollIntoView(({behavior:"smooth"}));
contactButton.style.borderRadius="8px 8px";
}
    projectEmployeeButton.onclick = function(){
    if(x.matches || n.matches){
    employerAppInner.style.transform="rotateY(180deg)";
    }
};
document.addEventListener('click', function handleClickOutsideBox(event) {
    const box =  document.querySelector(".employee-app-card-inner");
  
    if (!box.contains(event.target) && y.matches ||!box.contains(event.target) && n.matches && c.matches && !m.matches) {
      box.style.transform = 'rotateY(0deg)';
    }
  });

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
        else if(x.matches && y.matches && window.scrollY>=3500 && window.scrollY<=5200){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.transition="1s"; 
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba";
            header.style.backgroundColor="#1d5b89";
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
    
        }
        else if(x.matches && y.matches && window.scrollY>=5500){
        header.style.backgroundColor="#1d4662";
        document.querySelector("li.portf").style.border="none";
        document.querySelector("li.portf").style.borderRadius="none"; 
        document.querySelector("li.portf").style.boxShadow ="none";
        contactButton.style.border="1px solid";
        contactButton.style.borderRadius="8px 8px";
        contactButton.style.transition="1s";
        contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
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
            homelink.style.color="skyblue";
            header.style.backgroundColor="transparent";
        }
        else if(n.matches && c.matches & window.scrollY>=700 && window.scrollY<=1500){
            document.querySelector("li.About").style.border="1px solid";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 5px 13px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";    
            homeButton.style.border="none";
        }
        else if(n.matches && c.matches && window.scrollY>1500 && window.scrollY<=2200){
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            contactButton.style.transition="1s";
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.transition="1s";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba";
        }
        else if(n.matches && c.matches && window.scrollY>=2300 && window.scrollY<=2500){
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";
            contactButton.style.border="1px solid";
            contactButton.style.borderRadius="8px 8px";
            contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
        }
        else if(m.matches && c.matches && window.scrollY>=1700 && window.scrollY<=1750|| ml.matches && c.matches && window.scrollY>=1700 && window.scrollY<=1750){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.portf").style.border="1px solid";
            document.querySelector("li.portf").style.borderRadius="8px 8px";
            document.querySelector("li.portf").style.transition="2s"; 
            document.querySelector("li.portf").style.boxShadow ="2px 5px 13px 5px #0985ba"; 
        }
        else if(m.matches && c.matches && window.scrollY>=2600 && window.scrollY<=2800){
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";
            contactButton.style.border="1px solid";
            contactButton.style.borderRadius="8px 8px";
            contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
        }
    })
