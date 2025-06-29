/* JS File for Restaurant Page Project relating to the homepage */

function initializeHome() {
    const contentElement = document.querySelector(".content-box");
    contentElement.classList.remove("menu");
    contentElement.innerHTML = "";

    // Header
    const homeHeaderElement = document.createElement("h1");
    homeHeaderElement.textContent = "The Ice Cream Den";
    
    contentElement.appendChild(homeHeaderElement);
    
    // Paragraph
    const homePElement = document.createElement("p");
    homePElement.textContent = "Burger";
    // homePElement.textContent = "Explore endless varieties of classic or unique ice cream flavors, guaranteed to satisfy!";
    
    contentElement.appendChild(homePElement);
}

export { initializeHome }