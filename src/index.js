/* JS File for Restaurant Page Project, used to switch tabs/modules */
import "./styles.css";
import background from "./assets/img/bg.jpg";
import { initializeHome } from "./home"
import { initializeMenu } from "./menu";
import { initializeContact } from "./contact";

// Background Image
const BgElement = document.createElement("img");
BgElement.classList.add("bg");
BgElement.src = background;
BgElement.alt = "Background Image";
document.body.appendChild(BgElement);

// Initialize homepage
initializeHome();

// Add event listeners to buttons
const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const contactButton = document.querySelector(".contact-button");

homeButton.addEventListener("click", function (e) {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    initializeHome();
});

menuButton.addEventListener("click", function (e) {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");
    initializeMenu();
});

contactButton.addEventListener("click", function (e) {
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.add("active");
    initializeContact();
});