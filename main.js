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

const deployProject = (project, event) => {
  
  const deploy = () => {
    if (toggle) {
      event.style.transform = "rotate(90deg)";
    } else {
      event.style.transform = "rotate(0deg)";
    } 
    toggle = !toggle;
  }
  project.addEventListener("click", deploy);
  event.addEventListener("click", deploy);
}

const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");


const button1img = document.querySelector("#button-1 img");
const button2img = document.querySelector("#button-2 img");
const button3img = document.querySelector("#button-3 img");
const button4img = document.querySelector("#button-4 img");


deployProject(button1, button1img);
deployProject(button2, button2img);
deployProject(button3, button3img);
deployProject(button4, button4img);

deployProject(button1img, button1img);
deployProject(button2img, button2img);
deployProject(button3img, button3img);
deployProject(button4img, button4img);