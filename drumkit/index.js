// Find the number of drum buttons
var ButtonCount = document.querySelectorAll(".drum").length;

// Loop through each drum button
for (var i = 0; i < ButtonCount; i++) {
    // Add a click event listener to each button
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // Get the inner HTML (like "w", "a", etc.) of the clicked button
        var buttonInnerHTML = this.innerHTML;
        // Call the function to play the sound based on the button pressed
        makeSound(buttonInnerHTML);
    });
}

// Add a listener for when any key is pressed on the keyboard
document.addEventListener("keypress", function(event) {
    // Call the function to play the sound based on the key pressed
    makeSound(event.key);
});

// Function to play the sound based on the button or key pressed
function makeSound(key) {
    // Check which button or key was pressed
    switch (key) {
        case "w":
            // Play tom-1 sound if "w" is pressed
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            // Play tom-2 sound if "a" is pressed
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            // Play tom-3 sound if "s" is pressed
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            // Play tom-4 sound if "d" is pressed
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            // Play snare sound if "j" is pressed
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            // Play kick-bass sound if "k" is pressed
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            // Play crash sound if "l" is pressed
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            // If any other key is pressed, log it to the console
            console.log(key);
    }
}
