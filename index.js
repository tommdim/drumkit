var sounds = [
    "tom-1.mp3",
    "tom-2.mp3",
    "tom-3.mp3",
    "tom-4.mp3",
    "crash.mp3",
    "kick-bass.mp3",
    "snare.mp3",
];
var keys = ["w", "a", "s", "d", "j", "k", "l"];
var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    console.log(i);
    buttons[i].addEventListener("click", function () {
        audio = new Audio("sounds/" + sounds[i]);
        audio.play();
        buttonAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function (event) {
    for (i = 0; i < keys.length; i++) {
        console.log("loooping")
        if (event.key === keys[i]) {
            new Audio("sounds/" + sounds[i]).play();
            buttonAnimation(event.key)
        }
    }
});




function buttonAnimation(key) {
    document.querySelector("." + key).classList.toggle("pressed")

    setTimeout(function() {document.querySelector("." + key).classList.toggle("pressed")}, 100)

}
// switch(event.key) {
//     case "w":
//         tom1 = new Audio("sounds/tom-1.mp3");
//         tom1.play();
//         break;
//     case "a":
//         tom2 = new Audio("sounds/tom-2.mp3");
//         tom2.play();
//         break;
//     case "s":
//         tom3 = new Audio("sounds/tom-3.mp3");
//         tom3.play();
//         break;
//     case "d":
//         tom4 = new Audio("sounds/tom-4.mp3");
//         tom4.play();
//         break;
//     case "j":
//         crash = new Audio("sounds/crash.mp3");
//         crash.play();
//         break;
//     case "k":
//         kickbass = new Audio("sounds/kick-bass.mp3");
//         kickbass.play();
//         break;
//     case "l":
//         snare = new Audio("sounds/snare.mp3");
//         snare.play();
//         break;
// }
