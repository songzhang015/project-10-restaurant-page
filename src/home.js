/* JS File for Restaurant Page Project relating to the homepage */
import homeBg from "./assets/img/home-bg.jpg";

function initializeHome() {
    const contentElement = document.querySelector("#content");
    contentElement.innerHTML = "";

    // Header
    const homeHeaderElement = document.createElement("h1");
    homeHeaderElement.textContent = "The Ice Cream Den";
    
    contentElement.appendChild(homeHeaderElement);
    
    // Paragraph
    const homePElement = document.createElement("p");
    homePElement.textContent = "Explore endless varieties of classic or unique ice cream flavors, guaranteed to satisfy!";
    
    contentElement.appendChild(homePElement);
    
    // Image
    const homeBgElement = document.createElement("img");
    homeBgElement.classList.add("home-bg");
    homeBgElement.src = homeBg;
    homeBgElement.alt = "Home Background Image";
    contentElement.appendChild(homeBgElement);
}

export { initializeHome }