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
        alert("Alright you leave me no choise, continue and I will delete that button")
    } else if (click == 200) {
        document.getElementById("BUTTon").remove()
        alert("Told ya I was going to delete that button bud.")
    } else if (click == 201) {
        alert("Bro what.")
    } else if (click == 250) {
        alert("What's so special about this button?")
        alert("Because come on, nobody is spamming this for nothing")
    } else if (click == 500) {
        alert("Congrats, that's 500 clicks you got there")
        alert("Are you happy now?")
    } else if (click == 501) {
        alert("Alright you're not.")
    } else if (click == 1000) {
        alert("Congrats that's 1000 clicks you got there, you are surely thinking there is more after that but nope, now I will stuck the number on 100, have a nice day :)")
    } else if (click == 1001) {
        alert("nope")
        click = 1000
    } else if (click == 1002) {
        alert("How. Just. How.")
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