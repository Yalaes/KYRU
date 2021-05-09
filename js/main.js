const logo = document.querySelector("#logo");
const bio = document.querySelector("#bio");
let bioState = true;

// when clic on bio link, the logo move up and the bio div appear from the left. like magic
function translateForBio() {
    state = bioState;

    // bio is off screen
    if (state) {
        logo.style.transform = "translateY(-30rem)";
        logo.style.transition="transform 1s";
        bio.style.transform = "translateX(0)";
        bio.style.transition="transform .6s .4s";
        
        // bio is on screen
    } else {
        logo.style.transform = "translateY(0)";
        logo.style.transition="transform 1s .4s";
        bio.style.transform = "translateX(-40rem)"
        bio.style.transition="transform .6s";

    }
    bioState = !bioState;
}