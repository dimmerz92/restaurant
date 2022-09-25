import { doubleLists } from "./menu";
import "../styles/contact.css"
import Loc from "../img/location.png";

function contact() {
    const main = document.createElement("main");
    main.classList.add("contact");

    // Heading
    const h2 = document.createElement("h2");
    h2.textContent = "Contact Us";
    main.appendChild(h2);

    // Subheading
    const subheading = document.createElement("p");
    subheading.textContent = "Contact us by phone or email to arrange bookings or to ask any questions"
    main.appendChild(subheading);

    // Opening hours
    const openDiv = document.createElement("div");
    openDiv.classList.add("open");
    const openHours = ["Monday", "Closed", "Tuesday", "1200 - 2200", "Wednesday", "1200 - 2200", "Thursday", "1200 - 2200", "Friday", "1200 - 0000", "Saturday", "1200 - 0000", "Sunday", "1200 - 1800"];
    const openLists = doubleLists(openHours);
    openDiv.appendChild(openLists[0]);
    openDiv.appendChild(openLists[1]);
    main.appendChild(openDiv);

    // Location
    const location = document.createElement("div");
    location.classList.add("location");
    const h4 = document.createElement("h4");
    h4.textContent = "Our Location";
    location.appendChild(h4);
    const locationP = document.createElement("p");
    locationP.textContent = "You can find us in the one and only capital city of the world, Perth, Western Australia";
    location.appendChild(locationP);
    const westralia = new Image();
    westralia.src = Loc;
    location.appendChild(westralia);
    main.appendChild(location);

    return main;
};

export default contact;