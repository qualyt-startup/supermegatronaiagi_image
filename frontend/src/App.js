const BASE_URL = 'https://dannygerhardt-backend.herokuapp.com/api/';

// Example API call
fetch(`${BASE_URL}your-endpoint`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // handle data
    })
    .catch(error => console.error('Error:', error));
