if (localStorage.getItem("Theme") == 1) {
    theme = 1 // Dark mode
    document.getElementById("Title").style.color = "#FFFFFF";
    document.getElementById("Text1").style.color = "#FFFFFF";
    document.getElementById("Text2").style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#000000"
} else {
    theme = 0 // Light mode - Default
    document.getElementById("Title").style.color = "#000000";
    document.getElementById("Text1").style.color = "#000000";
    document.getElementById("Text2").style.color = "#000000";
    document.body.style.backgroundColor = "#FFFFFF"
}