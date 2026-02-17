let theme = 0 
if (localStorage.getItem("Theme") == 1) {
    theme = 1 // Dark mode
    document.getElementById("Text1").style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#000000"
} else {
    theme = 0 // Light mode - Default
    document.getElementById("Text1").style.color = "#000000";
    document.body.style.backgroundColor = "#FFFFFF"
}

function changetheme() {
    if (theme == 0) {
        theme = 1;
        document.getElementById("Text1").style.color = "#FFFFFF";
        document.body.style.backgroundColor = "#000000"
    } else {
        theme = 0;
        document.getElementById("Text1").style.color = "#000000";
        document.body.style.backgroundColor = "#FFFFFF"
    }
    localStorage.setItem("Theme", theme);
}

function loadpage(page) {
    window.location.href= page;
}