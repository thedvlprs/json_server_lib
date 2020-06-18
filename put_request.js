const axios = require('axios');

// TODO: JSON Server modify data with PUT request
// In the following example we modify data with a PUT request:
axios
    .put('http://localhost:3000/users/6/', {
        first_name: 'Fred',
        last_name: 'Blair',
        email: 'freddyb34@yahoo.com',
    })
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });

// In the example, we modify the user's email address.
