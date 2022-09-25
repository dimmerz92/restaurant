import "../styles/menu.css";

function menu() {
    const main = document.createElement("main");
    main.classList.add("menu");

    // Heading
    const h2 = document.createElement("h2");
    h2.textContent = "Menu";
    main.appendChild(h2);

    // Menu navigation buttons
    const jumpLinks = document.createElement("div");
    jumpLinks.classList.add("jumps");
    const linkNames = ["Entree 前菜","Ramen 拉麺","Cold Drinks 飲み物","Alcohol 酒 & ビール"];
    for (let i = 0; i < linkNames.length; i++) {
        let link = document.createElement("a");
        link.textContent = linkNames[i];
        link.href =  "#" + linkNames[i].replace(/ /g, "");
        jumpLinks.appendChild(link);
    };
    main.appendChild(jumpLinks);

    // Entree section
    const entree = document.createElement("div");
    entree.classList.add("menu", "entree");
    const entreeTitle = document.createElement("h3");
    entreeTitle.textContent = linkNames[0];
    entreeTitle.id = linkNames[0].replace(/ /g, "");
    entree.appendChild(entreeTitle);
    entree.appendChild(menuItem("Gyoza", "../src/img/gyoza.png", "Delicious pork filled pan-fried dumplings", "450")); // Gyoza
    entree.appendChild(menuItem("Edamame", "../src/img/edamame.png", "Warm salted edamame (soybeans)", "250")); // Edamame
    entree.appendChild(menuItem("Karaage", "../src/img/karaage.png", "Succulent chicken fried in potato starch", "450")); // Karaage
    entree.appendChild(menuItem("Agedashi Tofu", "../src/img/tofu.png", "Soft tofu fried in potato starch served in agedashi broth", "350"));
    main.appendChild(entree);

    // Ramen section
    const ramen = document.createElement("div");
    ramen.classList.add("menu", "ramen");
    const ramenTitle = document.createElement("h3");
    ramenTitle.textContent = linkNames[1];
    ramenTitle.id = linkNames[1].replace(/ /g, "");
    ramen.appendChild(ramenTitle);
    ramen.appendChild(menuItem("", "../src/img/ramen.png", "Ramen noodles served in broth, topped with chashu pork slices", "1250"));

    // Ramen options
    const ramenOptions = document.createElement("div");
    ramenOptions.classList.add("options");
    const broth = menuOptions("Broth", ["Shoyu (Soy)", "Shio (Salt)", "Miso (Bean Paste)"]); // Broth
    ramenOptions.appendChild(broth);
    const noodles = menuOptions("Noodles", ["Hard", "Medium", "Soft"]); // Noodles
    ramenOptions.appendChild(noodles);
    const meat = menuOptions("Meat / No Meat", ["Extra Meat (+300円)", "Normal Meat", "No Meat"]); // Meat
    ramenOptions.appendChild(meat);
    const extras = menuOptions("Extras +200円", ["Noodles (Keep some soup in your bowl)", "Tamago / Egg", "Bamboo Shoots & Black Fungus"]); // Extras
    ramenOptions.appendChild(extras);
    ramen.appendChild(ramenOptions);
    main.appendChild(ramen);

    // Drinks section
    const drinks = document.createElement("div");
    drinks.classList.add("menu", "drinks");

    // Cold drinks
    const coldDrinks = document.createElement("div");
    const coldDrinksTitle = document.createElement("h3");
    coldDrinksTitle.textContent = linkNames[2];
    coldDrinksTitle.id = linkNames[2].replace(/ /g, "");
    coldDrinks.appendChild(coldDrinksTitle);
    const drinkItems = ["Soft Drink / Soda", "350", "Iced Green Tea", "250", "Iced Coffee", "250", "Ramune", "350"];
    const drinkLists = doubleLists(drinkItems, "円");
    coldDrinks.appendChild(drinkLists[0]);
    coldDrinks.appendChild(drinkLists[1]);
    drinks.appendChild(coldDrinks);

    // Alcohol
    const alcohol = document.createElement("div");
    const alcoholTitle = document.createElement("h3");
    alcoholTitle.textContent = linkNames[3];
    alcoholTitle.id = linkNames[3].replace(/ /g, "");
    alcohol.appendChild(alcoholTitle);
    const alcoholItems = ["Asahi / Sapporo / Kirin (Glass) bottle", "(500) 420", "Cold Sake", "450", "Warm Sake", "450", "Umeshu", "550"];
    const alcoholLists = doubleLists(alcoholItems, "円");
    alcohol.appendChild(alcoholLists[0]);
    alcohol.appendChild(alcoholLists[1]);
    drinks.appendChild(alcohol);

    main.appendChild(drinks);

    return main;
};

function menuItem(name, img, desc, price) {
    const item = document.createElement("figure");
    item.classList.add("menuItem");

    // Item name
    const itemName = document.createElement("figcaption");
    itemName.textContent = name;
    item.appendChild(itemName);

    // Item image & description
    const figure = document.createElement("figure");
    const itemImg = document.createElement("img");
    itemImg.src = img;
    figure.appendChild(itemImg);
    const itemDesc = document.createElement("figcaption");
    itemDesc.textContent = desc;
    figure.appendChild(itemDesc);
    item.appendChild(figure);

    // Item price
    const itemPrice = document.createElement("p");
    itemPrice.textContent = price + "円";
    item.appendChild(itemPrice);

    return item;
};

function menuOptions(option, array) {
    const div = document.createElement("div");
    div.classList.add(option.split(" ")[0]);

    // Option title
    const title = document.createElement("p");
    title.textContent = option;
    div.appendChild(title);

    // Option body
    const options = document.createElement("ul");
    for (let i in array) {
        let li = document.createElement("li");
        li.textContent = array[i];
        options.appendChild(li);
    };
    div.appendChild(options);

    return div;
}

export function doubleLists(array, token = false) {
    const items = document.createElement("ul");
    const prices = document.createElement("ul");
    for (let i = 0; i < array.length; i += 2) {
        let item = document.createElement("li");
        item.textContent = array[i];
        items.appendChild(item);
        let price = document.createElement("li");
        price.textContent = array[i + 1] + (token ? token : "");
        prices.appendChild(price);
    };

    return [items, prices];
};

export default menu;