const axios = require('axios');

// TODO: JSON Server DELETE request
// In the following example, we show how to delete a user with a DELETE request:
axios
    .delete('http://localhost:3000/users/1')
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });

// In the example, we delete the user with Id 1.
