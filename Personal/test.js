var beep = "beep.mp3"
var i = 15;

// Function to play the beep sound
function playBeep() {
    // Check if running in a browser environment
    if (typeof window !== "undefined" && typeof window.Audio === "function") {
        var audio = new Audio(beep);
        audio.play();
    } else {
        // Needed for VSCode
        console.log("Sound will play here:", beep);
    }
}
// Start the countdown
function startTimer() {

    var countdownTimer = setInterval(function() {
    let text = "";
    
        if (i == 12) {
            text = "Ignition sequence start";
        }
        if (i == 10) {
            text = "Opening Hatches";
        }
        if (i == 5) {
            text = "Preparing for launch";
        }
        console.log("T-", i, text);
        i = i - 1;
        playBeep();        
        if (i <= 0) {
            console.log("Blast off!");
            beep = "rocket.mp3"
            playBeep();
            
            clearInterval(countdownTimer);
        }
    }, 1000);
}
// Program entry point
startTimer(); 
