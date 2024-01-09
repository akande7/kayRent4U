document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://cw7ym3y86a.execute-api.us-east-1.amazonaws.com/Prod/formdata';

    document.getElementById('SubmitIcon').addEventListener('click', function(event) {
        console.log('Button clicked!');
        event.preventDefault();

        const name = document.getElementById('inputName4').value;
        const phone = document.getElementById('inputSubject4').value;
        const email = document.getElementById('inputEmail4').value;
        const message = document.getElementById('inputMessage').value;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                phone: phone,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                console.log('Request successful!');
                // Add success message or redirect the user
            } else {
                console.error('Request failed!');
                // Handle error - display error message, etc.
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any network-related errors
        });
    });
});
