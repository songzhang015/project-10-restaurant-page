/* JS File for Restaurant Page Project relating to the menu page */

function initializeMenu() {
    const contentElement = document.querySelector(".content-box");
    contentElement.innerHTML = "";

    // Header
    const homeHeaderElement = document.createElement("h1");
    homeHeaderElement.textContent = "MENU";
    
    contentElement.appendChild(homeHeaderElement);
    
    // Paragraph
    const homePElement = document.createElement("p");
    homePElement.textContent = "Burger";
    // homePElement.textContent = "Explore endless varieties of classic or unique ice cream flavors, guaranteed to satisfy!";
    
    contentElement.appendChild(homePElement);
}

export { initializeMenu }