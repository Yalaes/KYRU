// ============== all of this for bio/ apropos animation

const logo = document.querySelector("#logo");        // move it to make room for bio text (or not in mobile version)
const bio = document.querySelector("#bio");          // bio div
const arrow = document.querySelector(".icon-arrow"); // for rotation
let bioState = true;


// when clic on bio link, the logo move up and the bio div appear from the left. like magic
function translateForBio() {
    state = bioState; // flag - toogle bio inside or outside the view
    let mediamobile = window.matchMedia("(max-width: 36em)").matches; // in mobile version the logotext do not translate/ is fixed

    // bio is off screen
    if (state) {
        logo.style.transform = "translateY(0)";
        if(!mediamobile) logo.style.transform = "translateY(-35vh)";
        logo.style.transition="transform 1s";
        bio.style.transform = "translateX(0)";
        bio.style.transition="transform .6s .4s";
        arrow.style.transform="rotate(0)";
        
        // bio is on screen
    } else {
        logo.style.transform = "translateY(0)";
        logo.style.transition="transform 1s .4s";
        bio.style.transform = "translateX(-100rem)"
        bio.style.transition="transform .6s";
        arrow.style.transform="rotate(180deg)";

    }
    bioState = !bioState; // toogle state
}
//  ==================== finish