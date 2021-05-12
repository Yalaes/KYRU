// ============== all of this for bio/ apropos animation

const logo = document.querySelector("#logo"); // move it to make room for bio text (or not in mobile version)
const bio = document.querySelector("#bio"); // bio div
const arrow = document.querySelector(".icon-arrow"); // for rotation
let bioState = true;

// popup set image
const imageForPop = document.querySelector(".popup__image");
// close button link to the actual image parent div
const closeBtn = document.querySelector("#close-btn");

// when clic on bio link, the logo move up and the bio div appear from the left. like magic
function translateForBio() {
    let state = bioState; // flag - toogle bio inside or outside the view
    let mediamobile = window.matchMedia("(max-width: 36em)").matches; // in mobile version the logotext do not translate/ is fixed

    // bio is off screen
    if (state) {
        logo.style.transform = "translateY(0)";
        if (!mediamobile) logo.style.transform = "translateY(-40vh)";
        logo.style.transition = "transform 1s";
        bio.style.transform = "translateX(0)";
        bio.style.transition = "transform .6s .4s";
        arrow.style.transform = "rotate(0)";

        // bio is on screen
    } else {
        if (!mediamobile) logo.style.transform = "translateY(-40vh)";
        logo.style.transform = "translateY(0)";
        logo.style.transition = "transform 1s .4s";
        bio.style.transform = "translateX(-100rem)"
        bio.style.transition = "transform .6s";
        arrow.style.transform = "rotate(180deg)";

    }
    bioState = !bioState; // toogle state
}
//  ==================== finish

// popup image src
function popImage(imageUrl, closeTo = "#") {
    closeBtn.href = closeTo; // set the close btn href to go back 
    imageForPop.src = ''; //purge the previous image
    imageForPop.src = imageUrl;
}

//fix - check and place the logo if the user resize the window when the bio is displayed
function checkBio() {
    //state==true if the bio is out the screen
    let state = bioState;
    let mediamobile = window.matchMedia("(max-width: 36em)").matches;
    if (!state) {
        if (mediamobile)
            logo.style.transform = "translateY(0)";
        else
            logo.style.transform = "translateY(-40vh)";
    }
}

window.onresize = checkBio;