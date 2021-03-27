var colors = [
    // ["black", "#fdfdfd"],
    // ["#1a1a1a", "#fdfdfd"],
    // ["#282828", "#fdfdfd"],
    ["black", "#fff"],
    ["#1a1a1a", "#fff"],
    ["#282828", "#fff"],
    ["#E8E8E8", "black"],
    ["#F5F5F5", "black"],
    ["#FFFFFF", "black"],
]

var root = $(":root");

var currentZoom =
    localStorage.getItem("currentZoom") == null ?
    Math.round(root.css("--story-text-zoom") * 10) / 10 :
    parseFloat(localStorage.getItem("currentZoom"));

var currentColor =
    localStorage.getItem("currentColor") == null ?
    colors.findIndex(_ => _[0] == root.css("--background-color").trim()) :
    parseInt(localStorage.getItem("currentColor"));

updateLocalStorage();

function updateLocalStorage() {
    localStorage.setItem("currentZoom", currentZoom);
    localStorage.setItem("currentColor", currentColor);
}



function textsizeIncrease() {
    currentZoom = Math.min(2, currentZoom + 0.1);

    root.css("--story-text-zoom", currentZoom);
    updateLocalStorage();
}

function textsizeDecrease() {
    currentZoom = Math.max(0.5, currentZoom - 0.1);

    root.css("--story-text-zoom", currentZoom);
    updateLocalStorage();
}

function textsizeRefresh() {
    root.css("--story-text-zoom", currentZoom);
}

function brightnessIncrease() {
    currentColor = Math.min((colors.length - 1), currentColor + 1);

    brightnessRefresh(currentColor);
    updateLocalStorage();
}

function brightnessDecrease() {
    currentColor = Math.max(0, currentColor - 1);

    brightnessRefresh(currentColor);
    updateLocalStorage();
}

function brightnessRefresh(currentColor) {
    $("body").css("background-color", colors[currentColor][0]);
    $("body").css("color", colors[currentColor][1]);

    $(".h5").hide();
    $(".h5-white").hide();

    if (currentColor > 2) {
        $(".h5-white").show();
        $("h5").css("color", "rgb(0, 114, 145)");
        $("h3").css("color", "gray");
        root.css("--bottomheader-color", "rgb(0, 114, 145)");


    } else {
        $(".h5").show();
        $("h5").css("color", "goldenrod");
        $("h3").css("color", "#b0b0b0");
        root.css("color", "lightskyblue");

    }

    document.styleSheets[0].insertRule(
        `.story-image:before { 
            -moz-box-shadow: inset 0px 0px var(--story-image-blur-radius) var(--story-image-spread-radius) ` + colors[currentColor][0] + `; 
            -webkit-box-shadow: inset 0px 0px var(--story-image-blur-radius) var(--story-image-spread-radius) ` + colors[currentColor][0] + `; 
            box-shadow: inset 0px 0px var(--story-image-blur-radius) var(--story-image-spread-radius) ` + colors[currentColor][0] + `; 
        }`, document.styleSheets[0].cssRules.length);
    document.styleSheets[0].insertRule(
        `.story-divider:before {
            background-image: radial-gradient(circle, ` + colors[currentColor][1] + `, transparent);
        }`, document.styleSheets[0].cssRules.length);
}

//init
brightnessRefresh(currentColor);
textsizeRefresh(currentColor);