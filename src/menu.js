/* JS File for Restaurant Page Project relating to the menu page */
import vanilla from "./assets/img/vanilla.jpg";
import chocolate from "./assets/img/chocolate.jpg";
import strawberry from "./assets/img/strawberry.jpg";
import cookiesAndCream from "./assets/img/cookiesAndCream.jpg";
import mintChocolate from "./assets/img/mintChocolate.jpg";
import caramelPeanutButter from "./assets/img/caramelPeanutButter.jpg";

function initializeMenu() {
    const contentElement = document.querySelector(".content-box");
    contentElement.classList.add("menu");
    contentElement.innerHTML = "";

    // Prices
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    contentElement.appendChild(priceContainer);

    const priceHeader = document.createElement("h2");
    priceHeader.classList.add("price-header");
    priceHeader.textContent = "Prices:"
    priceContainer.appendChild(priceHeader);

    const priceHeader1 = document.createElement("h3");
    priceHeader1.textContent = "Scoops:"
    priceContainer.appendChild(priceHeader1);

    const priceOne = document.createElement("p");
    priceOne.classList.add("price-item");
    priceOne.textContent = "1 Scoop: $2.50"
    priceContainer.appendChild(priceOne);

    const priceTwo = document.createElement("p");
    priceTwo.classList.add("price-item");
    priceTwo.textContent = "2 Scoops: $4.50"
    priceContainer.appendChild(priceTwo);

    const priceThree = document.createElement("p");
    priceThree.classList.add("price-item");
    priceThree.textContent = "3 Scoops: $6.00"
    priceContainer.appendChild(priceThree);

    const priceHeader2 = document.createElement("h3");
    priceHeader2.textContent = "Toppings:"
    priceContainer.appendChild(priceHeader2);

    const priceFour = document.createElement("p");
    priceFour.classList.add("price-item");
    priceFour.textContent = "Sprinkles, Whipped Cream, Chocolate Sauce"
    priceContainer.appendChild(priceFour);

    const priceFour2 = document.createElement("p");
    priceFour2.classList.add("price-item");
    priceFour2.textContent = "Add any number of toppings for an extra $1"
    priceContainer.appendChild(priceFour2);

    const priceHeader3 = document.createElement("h3");
    priceHeader3.textContent = "Containers:"
    priceContainer.appendChild(priceHeader3);

    const priceFive = document.createElement("p");
    priceFive.classList.add("price-item");
    priceFive.textContent = "Available in a paper cup or waffle cone, no extra costs"
    priceContainer.appendChild(priceFive);

    // Menu Items

    // Vanilla
    const vanillaIconContainer = document.createElement("div");
    vanillaIconContainer.classList.add("icon-container");
    contentElement.appendChild(vanillaIconContainer);

    const vanillaIcon = document.createElement("img");
    vanillaIcon.classList.add("menu-icon");
    vanillaIcon.src = vanilla;
    vanillaIcon.alt = "Vanilla Icon";
    vanillaIconContainer.appendChild(vanillaIcon);

    const vanillaHeaderElement = document.createElement("h2");
    vanillaHeaderElement.textContent = "Vanilla";
    vanillaIconContainer.appendChild(vanillaHeaderElement);

    // Chocolate
    const chocolateIconContainer = document.createElement("div");
    chocolateIconContainer.classList.add("icon-container");
    contentElement.appendChild(chocolateIconContainer);

    const chocolateIcon = document.createElement("img");
    chocolateIcon.classList.add("menu-icon");
    chocolateIcon.src = chocolate;
    chocolateIcon.alt = "Background Image";
    chocolateIconContainer.appendChild(chocolateIcon);

    const chocolateHeaderElement = document.createElement("h2");
    chocolateHeaderElement.textContent = "Chocolate";
    chocolateIconContainer.appendChild(chocolateHeaderElement);


    // Strawberry
    const strawberryIconContainer = document.createElement("div");
    strawberryIconContainer.classList.add("icon-container");
    contentElement.appendChild(strawberryIconContainer);

    const strawberryIcon = document.createElement("img");
    strawberryIcon.classList.add("menu-icon");
    strawberryIcon.src = strawberry;
    strawberryIcon.alt = "Background Image";
    strawberryIconContainer.appendChild(strawberryIcon);

    const strawberryHeaderElement = document.createElement("h2");
    strawberryHeaderElement.textContent = "Strawberry";
    strawberryIconContainer.appendChild(strawberryHeaderElement);

    // Cookies'n'Cream
    const cookiesAndCreamIconContainer = document.createElement("div");
    cookiesAndCreamIconContainer.classList.add("icon-container");
    contentElement.appendChild(cookiesAndCreamIconContainer);

    const cookiesAndCreamIcon = document.createElement("img");
    cookiesAndCreamIcon.classList.add("menu-icon");
    cookiesAndCreamIcon.src = cookiesAndCream;
    cookiesAndCreamIcon.alt = "Background Image";
    cookiesAndCreamIconContainer.appendChild(cookiesAndCreamIcon);

    const cookiesAndCreamHeaderElement = document.createElement("h2");
    cookiesAndCreamHeaderElement.textContent = "Cookies'n'Cream";
    cookiesAndCreamIconContainer.appendChild(cookiesAndCreamHeaderElement);

    // Mint Chocolate
    const mintChocolateIconContainer = document.createElement("div");
    mintChocolateIconContainer.classList.add("icon-container");
    contentElement.appendChild(mintChocolateIconContainer);

    const mintChocolateIcon = document.createElement("img");
    mintChocolateIcon.classList.add("menu-icon");
    mintChocolateIcon.src = mintChocolate;
    mintChocolateIcon.alt = "Background Image";
    mintChocolateIconContainer.appendChild(mintChocolateIcon);

    const mintChocolateHeaderElement = document.createElement("h2");
    mintChocolateHeaderElement.textContent = "Mint Chocolate";
    mintChocolateIconContainer.appendChild(mintChocolateHeaderElement);


    // Caramel Peanut Butter
    const caramelPeanutButterIconContainer = document.createElement("div");
    caramelPeanutButterIconContainer.classList.add("icon-container");
    contentElement.appendChild(caramelPeanutButterIconContainer);

    const caramelPeanutButterIcon = document.createElement("img");
    caramelPeanutButterIcon.classList.add("menu-icon");
    caramelPeanutButterIcon.src = caramelPeanutButter;
    caramelPeanutButterIcon.alt = "Background Image";
    caramelPeanutButterIconContainer.appendChild(caramelPeanutButterIcon);

    const caramelPeanutButterHeaderElement = document.createElement("h2");
    caramelPeanutButterHeaderElement.textContent = "Caramel Peanut Butter";
    caramelPeanutButterIconContainer.appendChild(caramelPeanutButterHeaderElement);
}

export { initializeMenu }