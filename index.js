let click = 0
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

function clicks() {
    click = click + 1;
    document.getElementById("BUTTon").innerText = click;

    if (click == 20) {
        alert("wow... huh... why.")
    } else if (click == 50) {
        alert("Bro. There's is no easter egg.")
    } else if (click == 100) {
        alert("Oh come on dude. Why are you even doing this.")
    } else if (click == 150) {
        alert("Stop or at 200 I remove the button\nYou button clicker weirdo.")
    } else if (click == 200) {
        document.getElementById("BUTTon").remove()
        alert("OH LOOK THE BUTTON MISTERIOUSLY DISAPEARED")
    } else if (click == 201) {
        alert("Bro what.")
    }

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