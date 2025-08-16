// Call the welcomeSpeech function when the page loads
function welcomeSpeech() {
    let userName = prompt("Please enter your name:");
    if (userName !== null && userName.trim() !== '') {
        document.getElementById('user-greeting').textContent = userName;
    } else {
        document.getElementById('user-greeting').textContent = 'Guest';
    }
}
welcomeSpeech();

// Get the form element
const form = document.querySelector('form');

// Function to send a message and display it on the page
function sendMessage() {
    // 1. Get values from form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telp = document.getElementById('telp').value;
    const message = document.getElementById('message').value;

    // 2. Validate the inputs
    if (name.trim() === '') {
        alert('Nama tidak boleh kosong.');
        return; 
    }

    if (email.trim() === '' || !email.includes('@')) {
        alert('Email tidak valid. Pastikan email tidak kosong dan mengandung "@".');
        return;
    }

    if (telp.trim() === '' || isNaN(telp)) {
        alert('Nomor telepon tidak valid. Pastikan tidak kosong dan hanya berisi angka.');
        return;
    }
    
    if (message.trim() === '') {
        alert('Pesan tidak boleh kosong.');
        return;
    }

    // 3. Display the message in the output div
    const now = new Date();
    const formattedDateTime = now.toLocaleString('id-ID', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
    
    const outputDiv = document.getElementById('message-output');

    outputDiv.innerHTML = `
        <h3>Pesan Terkirim:</h3>
        <p><strong>Waktu:</strong> ${formattedDateTime}</p>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>No. Telepon:</strong> ${telp}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
}

// Add an event listener for the form submission
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the sendMessage function 
    sendMessage();
});