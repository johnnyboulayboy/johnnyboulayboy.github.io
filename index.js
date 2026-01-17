let click = 0
function clicks() {
    click = click + 1;
    document.getElementById("BUTTon").innerText = click;

    if (click == 20) {
        alert("wow... huh... why.")
    }
    if (click == 50) {
        alert("Bro. There's is no easter egg.")
    }
    if (click == 100) {
        alert("Oh come on dude. Why are you even doing this.")
    }
    if (click == 150) {
        alert("Stop or at 200 I remove the button\nYou button clicker weirdo.")
    }
    if (click == 200) {
        document.getElementById("BUTTon").remove()
        alert("OH LOOK THE BUTTON MISTERIOUSLY DISAPEARED")
    }
    if (click == 201) {
        alert("Bro what.")
    }
}