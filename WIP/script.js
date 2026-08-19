function back() {
    window.location.href = "https://johnnyb-boy.github.io/";
}
if (localStorage.getItem("Theme") == 1) {
    document.getElementById("Text1").style.color = "#FFFFFF";
    document.getElementById("Text2").style.color = "#FFFFFF";
    document.getElementById("Title").style.color = "#FFFFFF";
    document.body.style.backgroundColor = "#000000"
} else {
    document.getElementById("Text1").style.color = "#000000";
    document.getElementById("Text2").style.color = "#000000";
    document.getElementById("Title").style.color = "#000000";
    document.body.style.backgroundColor = "#FFFFFF"
}