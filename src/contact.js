/* JS File for Restaurant Page Project relating to the contact page */

function initializeContact() {
    const contentElement = document.querySelector(".content-box");
    contentElement.classList.remove("menu");
    contentElement.innerHTML = "";

    // Header
    const homeHeaderElement = document.createElement("h1");
    homeHeaderElement.textContent = "Contact Us";
    contentElement.appendChild(homeHeaderElement);
    
    // Paragraph
    const homePElement = document.createElement("p");
    homePElement.textContent = "📞 (123)-456-789";
    contentElement.appendChild(homePElement);

    const homePElement2 = document.createElement("p");
    homePElement2.textContent = "We are open Monday - Friday, 9am - 5pm";
    contentElement.appendChild(homePElement2);

    const homePElement3 = document.createElement("p");
    homePElement3.textContent = "Find us at 123 Main Street, Anytown USA, 12345";
    contentElement.appendChild(homePElement3);
}

export { initializeContact }