const axios = require('axios');

// TODO: JSON Server GET request
// In the next example we retrieve data with a GET request:
axios
    .get('http://localhost:3000/users')
    .then((resp) => {
        data = resp.data;

        data.forEach((e) => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// With the axios module, we get all users as a JSON array and loop through it with forEach().
