import home from "../pages/home";
import menu from "../pages/menu";
import contact from "../pages/contact";

function header() {
    // Creates website header
    const header = document.createElement("header");
    const logo = document.createElement("img");
    logo.src = "../src/img/logo.png";
    header.appendChild(logo);
    const h1 = document.createElement("h1");
    h1.textContent = "The Ramen Shaman";
    header.appendChild(h1);
    return header;
};

function nav() {
    // Creates website navbar
    const nav = document.createElement("nav");
    
    // Home button
    const homeButton = document.createElement("button");
    homeButton.textContent = "Home";
    homeButton.id = "home";
    homeButton.classList.add("active"); // Active by default
    homeButton.addEventListener("click", e => activeButton(e));
    nav.appendChild(homeButton);
    
    // Menu button
    const menuButton = document.createElement("button");
    menuButton.textContent = "Menu";
    menuButton.id = "menu";
    menuButton.addEventListener("click", e => activeButton(e));
    nav.appendChild(menuButton);

    // Contact button
    const contactButton = document.createElement("button");
    contactButton.textContent = "Contact";
    contactButton.id = "contact";
    contactButton.addEventListener("click", e => activeButton(e));
    nav.appendChild(contactButton);

    return nav;
};

function activeButton(button) {
    // Dynamically assigns class="active" to the clicked nav button
    const activeButton = document.querySelector(".active");
    activeButton.classList.remove("active");
    button.target.classList.add("active");
    render(true, button);
};

function footer() {
    // Creates website footer
    const footer = document.createElement("footer");
    const p = document.createElement("p");

    p.textContent = "Developed by Sitella Labs 2022";
    footer.appendChild(p);

    return footer;
};

function favicon() {
    const favicon = document.createElement("link");
    favicon.rel = "shortcut icon";
    favicon.href = "../src/img/favicon.png";
    favicon.type = "image/x-icon";
    return favicon
};

function render(bool = false, button) {
    // Renders the website HTML
    const content = document.getElementById("content");
    let rendered = bool;

    if (!rendered) {
        // Render static elements
        document.getElementsByTagName("head")[0].appendChild(favicon());
        content.appendChild(header());
        content.appendChild(nav());
        content.appendChild(home());
        content.appendChild(footer());
    } else {
        // Render dynamic elements
        content.getElementsByTagName("main")[0].remove();
        let target = button.target.id;

        switch(target) {
            case "home":
                content.insertBefore(home(), content.children[2]);
                break;
            case "menu":
                content.insertBefore(menu(), content.children[2]);
                break;
            case "contact":
                content.insertBefore(contact(), content.children[2]);
                break;
        };
    };
};

export default render;