const aboutButton = document.querySelector('[data-js="Aboutbutton"]');
const homeButton = document.querySelector('[data-js="homebt"]');
const homelink = document.querySelector('[data-js="homelink"]');
const certificateButton = document.querySelector('[data-js="Certificate"]');
const portfolioButton = document.querySelector(".portf");
const skillsButton = document.querySelector('[data-js="skillsLink"]');
const cvButton = document.querySelector('[data-js="CV"]');
const contactButton=document.querySelector('[data-js="contactLink"]');
const projectEmployeeButton=document.querySelector(".employee-app-card-front")
const employerAppInner = document.querySelector(".employee-app-card-inner")
const header = document.querySelector('[data-js="Header"]');
const x = window.matchMedia("(min-width: 300px)");
const menuIcon=document.querySelector("#menu-icon");
const y = window.matchMedia("(orientation: portrait)");
const n = window.matchMedia("(min-width: 550px)");
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
homeButton.onclick = function(){
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
const s = document.querySelector("nav");
function myFunction(){
if(s.style.display==="block"){
s.style.display="none";
document.querySelector("header").style.backgroundColor="transparent"
}
else if(x.matches && !n.matches && s.style.display==="none"){
    s.style.display="block";
    document.querySelector("header").style.backgroundColor="#1c5685"
}
else {
s.style.display="block";
document.querySelector("header").style.backgroundColor="#0a516f";
document.querySelector("header").style.transition="none";
}
}

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
skillsButton.onclick= function(){
const page5 = document.querySelector(".Skills");
page5.scrollIntoView(({behavior:"smooth"}));
skillsButton.style.borderRadius="8px 8px";
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
        if(x.matches && y.matches && window.scrollY >=2000 && window.scrollY<2800){
            document.querySelector("li.About").style.border="1px solid white";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 10px 10px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none"; 
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            homeButton.style.border="none";
            homelink.style.color="white";
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            header.style.backgroundColor="#0b3351";
            s.style.display="none";

        }
        else if(x.matches && y.matches && window.scrollY>=4000 && window.scrollY<=5200){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector('[data-js="skillsLink"]').style.border="1px solid";
            document.querySelector('[data-js="skillsLink"]').style.borderRadius="8px 8px";
            document.querySelector('[data-js="skillsLink"]').style.transition="2s"; 
            document.querySelector('[data-js="skillsLink"]').style.boxShadow ="2px 5px 13px 5px #0985ba"; 
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none"; 
            header.style.backgroundColor="#0c426b";
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            s.style.display="none";
    
        }
        else if(x.matches && y.matches && window.scrollY>=5900 && window.scrollY<=6600){
        header.style.backgroundColor="#1d5b89";
        document.querySelector('li.portf').style.border="1px solid";
            document.querySelector('li.portf').style.borderRadius="8px 8px";
            document.querySelector('li.portf').style.transition="2s"; 
            document.querySelector('li.portf').style.boxShadow ="2px 5px 13px 5px #0985ba";
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            s.style.display="none";
        }
        else if(x.matches && y.matches && window.scrollY>=8200){
            contactButton.style.border="1px solid";
            contactButton.style.borderRadius="8px 8px";
            contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none"; 
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            header.style.backgroundColor="#1d4662";
            s.style.display="none";
        }
        else if(x.matches && y.matches && window.scrollY<=1000){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector("li.About>a").style.transition="1s";
            homeButton.style.border="1px solid";
            homelink.style.color="skyblue";
            header.style.backgroundColor="#081b29";
        }
        else if(n.matches && c.matches && window.scrollY<=300){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            homeButton.style.border="1px solid";
            homelink.style.color="skyblue";
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            header.style.backgroundColor="transparent";
            s.style.display="none";
        }
        else if(n.matches && c.matches && window.scrollY>=700 && window.scrollY<=1250){
            document.querySelector("li.About").style.border="1px solid";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 5px 13px 5px #0985ba";
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";    
            homeButton.style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            header.style.backgroundColor="transparent";
            s.style.display="none";
        }
        else if(n.matches && c.matches && window.scrollY>=1700 && window.scrollY<=2200){
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            contactButton.style.transition="1s";
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector('[data-js="skillsLink"]').style.border="1px solid";
            document.querySelector('[data-js="skillsLink"]').style.borderRadius="8px 8px";
            document.querySelector('[data-js="skillsLink"]').style.transition="2s"; 
            document.querySelector('[data-js="skillsLink"]').style.boxShadow ="2px 5px 13px 5px #0985ba"; 
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.borderRadius="none"; 
            header.style.backgroundColor="transparent";
            document.querySelector("li.portf").style.boxShadow ="none";
            s.style.display="none";
            
        }
        else if(n.matches && c.matches && window.scrollY>=2600 && window.scrollY<=3100){
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            document.querySelector('li.portf').style.border="1px solid";
            document.querySelector('li.portf').style.borderRadius="8px 8px";
            document.querySelector('li.portf').style.transition="2s"; 
            document.querySelector('li.portf').style.boxShadow ="2px 5px 13px 5px #0985ba"; 
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            header.style.backgroundColor="transparent";
            contactButton.style.transition="1s";
            s.style.display="none";
        }
        else if(n.matches && c.matches && window.scrollY>=3600 && window.scrollY<=3900){
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";
            contactButton.style.border="1px solid";
            contactButton.style.borderRadius="8px 8px";
            contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            s.style.display="none";
            header.style.backgroundColor="transparent";
        }
        else  if(m.matches && c.matches && window.scrollY>=1600 &&  window.scrollY<=2000 || ml.matches && window.scrollY>=2200 && window.scrollY<=2400){
            document.querySelector("li.About").style.border="none";
            document.querySelector("li.About").style.boxShadow ="none";
            document.querySelector('[data-js="skillsLink"]').style.border="1px solid";
            document.querySelector('[data-js="skillsLink"]').style.borderRadius="8px 8px";
            document.querySelector('[data-js="skillsLink"]').style.transition="2s"; 
            document.querySelector('[data-js="skillsLink"]').style.boxShadow ="2px 5px 13px 5px #0985ba"; 
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.borderRadius="none"; 
            document.querySelector("li.portf").style.boxShadow ="none";
        }
        else if(m.matches && c.matches && window.scrollY>=2500 && window.scrollY<=3200|| ml.matches && c.matches && window.scrollY>=2500 && window.scrollY<=3200)
            {
                document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
            document.querySelector('li.portf').style.border="1px solid";
            document.querySelector('li.portf').style.borderRadius="8px 8px";
            document.querySelector('li.portf').style.transition="2s"; 
            document.querySelector('li.portf').style.boxShadow ="2px 5px 13px 5px #0985ba"; 
            contactButton.style.border="none";
            contactButton.style.borderRadius="none";
            contactButton.style.boxShadow="none";
            contactButton.style.transition="1s";
            
            }
        else if(m.matches && c.matches && window.scrollY>=3400 || ml.matches && c.matches && window.scrollY>=5800){
            document.querySelector("li.portf").style.border="none";
            document.querySelector("li.portf").style.boxShadow="none";
            contactButton.style.border="1px solid";
            contactButton.style.borderRadius="8px 8px";
            contactButton.style.boxShadow="2px 5px 13px 5px #0985ba";
        }
        else if(ml.matches && c.matches && window.scrollY>=700 && window.scrollY<=900){
            homeButton.style.border="none";
            document.querySelector("li.About").style.border="1px solid";
            document.querySelector("li.About").style.borderRadius="8px 8px";
            document.querySelector("li.About").style.transition="1s";
            document.querySelector("li.About").style.boxShadow ="2px 5px 13px 5px #0985ba";
            document.querySelector('[data-js="skillsLink"]').style.border="none";
            document.querySelector('[data-js="skillsLink"]').style.boxShadow="none";
        }
    })
