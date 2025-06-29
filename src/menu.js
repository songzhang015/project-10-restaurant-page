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

    // Prices
    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");
    contentElement.appendChild(priceContainer);

    const priceList = document.createElement("ul");
    priceList.classList.add("price-list");
    priceContainer.appendChild(priceList);

    const priceOne = document.createElement("li");
    priceOne.classList.add("price-item");
    priceOne.textContent = "1 Scoop: $4.00"
    priceList.appendChild(priceOne);

    const priceTwo = document.createElement("li");
    priceTwo.classList.add("price-item");
    priceTwo.textContent = "2 Scoops: $7.50"
    priceList.appendChild(priceTwo);

    const priceThree = document.createElement("li");
    priceThree.classList.add("price-item");
    priceThree.textContent = "3 Scoops: $10"
    priceList.appendChild(priceThree);

    const priceFour = document.createElement("li");
    priceFour.classList.add("price-item");
    priceFour.textContent = "Add any number of toppings (sprinkles, whipped cream, chocolate sauce) for $1 extra"
    priceList.appendChild(priceFour);
}

export { initializeMenu }