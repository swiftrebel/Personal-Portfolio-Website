const initializeNavSelector = (navElement, characterToAdd) => {
    
    const navSelectorOn = (event) => {
      event.target.innerHTML += characterToAdd;
    };
  
    const navSelectorOff = (event) => {
    const originalContent = event.target.getAttribute("data-original-content");
    event.target.innerHTML = originalContent;
    };

    navElement.setAttribute("data-original-content", navElement.innerHTML);
    navElement.style.transition = "all 0.3s";
  
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
