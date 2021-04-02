if (localStorage.getItem("overlayHidden") == "true")
    hideOverlay();

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
    localStorage.setItem("overlayHidden", true)
}