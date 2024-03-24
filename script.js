function showRegistrationForm() {
    document.getElementById('registrationPopup').style.display = 'flex';
  }
const scriptURL = 'https://script.google.com/macros/s/AKfycbzvre7GkoomEQPkLlT7JcFJQvv9qUXTBDqKmWeIgB160_mwrHVN0G-MRKWpGz1gmbVF/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
             // Close registration popup
    document.getElementById('registrationPopup').style.display = 'none';
  
    // Show thank you popup
    document.getElementById('thankyouPopup').style.display = 'block';
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
        });
});
function closeThankYouPopup() {
    document.getElementById('thankyouPopup').style.display = 'none';
  }

