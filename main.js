const initializeNavSelector = (navElement, characterToAdd) => {
    
    const navSelectorOn = (event) => {
      event.target.innerHTML += characterToAdd;
    };
  
    const navSelectorOff = (event) => {
    const originalContent = event.target.getAttribute("data-original-content");
    event.target.innerHTML = originalContent;
    };

    navElement.setAttribute("data-original-content", navElement.innerHTML);
  
    navElement.addEventListener("mouseover", navSelectorOn);
    navElement.addEventListener("mouseout", navSelectorOff);
}
  
const aboutMeNav = document.getElementById("about-me-nav");
const projectsNav = document.getElementById("projects-nav");
const skillsNav = document.getElementById("skills-nav");
const contactNav = document.getElementById("contact-nav");

initializeNavSelector(aboutMeNav, " |");
initializeNavSelector(projectsNav, " |");
initializeNavSelector(skillsNav, " |");
initializeNavSelector(contactNav, " |");

let toggle = true;

const deployProject1 = (project, event, text) => {
  
  const deploy = () => {
    if (toggle) {
      event.style.transform = "rotate(90deg)";
      text.style.display= "inline";
      text.style.alignitems = "center";
      button2.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      projectImage.src = "resources/guess-number.png";
      projectImage.style.paddingTop = "100px";
    } else {
      event.style.transform = "rotate(0deg)";
      text.style.display = "";
      button2.style.display = "";
      button3.style.display = "";
      button4.style.display = "";
      projectImage.src = "/resources/projects.png";
      projectImage.style.paddingTop = "0px"
    }
     
    toggle = !toggle;
  }
  project.addEventListener("click", deploy);
  event.addEventListener("click", deploy)
}

const deployProject2 = (project, event, text) => {
  
  const deploy = () => {
    if (toggle) {
      event.style.transform = "rotate(90deg)";
      text.style.display= "inline";
      button1.style.display = "none";
      button3.style.display = "none";
      button4.style.display = "none";
      projectImage.src = "/resources/flexbox.png";
      projectImage.style.paddingTop = "120px"
    } else {
      event.style.transform = "rotate(0deg)";
      text.style.display = "none";
      button1.style.display = "";
      button3.style.display = "";
      button4.style.display = "";
      projectImage.src = "/resources/projects.png";
      projectImage.style.paddingTop = "0px";
    }
     
    toggle = !toggle;
  }
  project.addEventListener("click", deploy);
  event.addEventListener("click", deploy)
}

const deployProject3 = (project, event, text) => {
  
  const deploy = () => {
    if (toggle) {
      event.style.transform = "rotate(90deg)";
      text.style.display= "inline";
      button1.style.display = "none";
      button2.style.display = "none";
      button4.style.display = "none";
      projectImage.src = "resources/mysterious-organism-white.png";
      projectImage.style.paddingTop = "120px";
    } else {
      event.style.transform = "rotate(0deg)";
      text.style.display = "none";
      button1.style.display = "";
      button2.style.display = "";
      button4.style.display = "";
      projectImage.src = "resources/projects.png";
      projectImage.style.paddingTop = "0px";
    }
     
    toggle = !toggle;
  }
  project.addEventListener("click", deploy);
  event.addEventListener("click", deploy)
}

const deployProject4 = (project, event, text) => {
  
  const deploy = () => {
    if (toggle) {
      event.style.transform = "rotate(90deg)";
      text.style.display= "inline";
      button1.style.display = "none";
      button2.style.display = "none";
      button3.style.display = "none";
      projectImage.src = "/resources/mixed-message.png";
      projectImage.style.paddingTop = "120px";
    } else {
      event.style.transform = "rotate(0deg)";
      text.style.display = "none";
      button1.style.display = "";
      button2.style.display = "";
      button3.style.display = "";
      projectImage.src = "resources/projects.png";
      projectImage.style.paddingTop = "0px";
    }
     
    toggle = !toggle;
  }
  project.addEventListener("click", deploy);
  event.addEventListener("click", deploy)
}

const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");


const button1img = document.querySelector("#button-1 img");
const button2img = document.querySelector("#button-2 img");
const button3img = document.querySelector("#button-3 img");
const button4img = document.querySelector("#button-4 img");

const button1text = document.getElementById("button-1-text");
const button2text = document.getElementById("button-2-text");
const button3text = document.getElementById("button-3-text");
const button4text = document.getElementById("button-4-text");

const projectImage = document.getElementById("main-image-proj");


deployProject1(button1, button1img, button1text);
deployProject2(button2, button2img, button2text);
deployProject3(button3, button3img, button3text);
deployProject4(button4, button4img, button4text);

deployProject1(button1img, button1img, button1text);
deployProject2(button2img, button2img, button2text);
deployProject3(button3img, button3img, button3text);
deployProject4(button4img, button4img, button4text);