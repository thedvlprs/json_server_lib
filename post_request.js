const axios = require('axios');

// TODO: JSON Server POST request
// With a POST request, we create a new user:
axios
    .post('http://localhost:3000/users', {
        id: 6,
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@gmail.com',
    })
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });

// A new user is created with axios.
