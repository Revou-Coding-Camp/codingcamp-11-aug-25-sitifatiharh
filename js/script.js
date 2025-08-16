welcomeSpeech();

// Call the welcomeSpeech function when the page loads
function welcomeSpeech() {
    let userName = prompt("Please enter your name:");
    if (userName != '') {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
    let message = document.getElementById('message').value;
    if (message !== '') {
        alert(`Your message: "${message}" has been sent successfully!`);
    } else {
        alert("Please enter a message before sending.");
    }
}