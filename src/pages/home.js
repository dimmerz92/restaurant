import "../styles/home.css";

function home() {
    const main = document.createElement("main");
    main.classList.add("home");

    // Heading
    const h2 = document.createElement("h2");
    h2.textContent = "Keep calm 'n eat ramen!";
    main.appendChild(h2);

    // Sub-heading
    const subheading = document.createElement("p");
    subheading.classList.add("home", "subheading");
    subheading.textContent = "The best  ramen in the West!";
    main.appendChild(subheading);

    // Bookings advice
    const bookings = document.createElement("p");
    bookings.classList.add("bookings");
    bookings.innerText = "いらっしゃいませ！\nWalk-ins happily welcomed, bookings are advised!";
    main.appendChild(bookings);

    // Rameme
    const rameme = document.createElement("img");
    rameme.src = "/src/img/rameme.png";
    rameme.alt = "It's all ramen, always has been";
    main.appendChild(rameme);

    return main;
};

export default home;