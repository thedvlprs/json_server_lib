const axios = require('axios');

// TODO: JSON Server operators
// We can use _gte and _lte for getting a specific range of data:
axios
    .get('http://localhost:3000/users?id_gte=4')
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });

// The code example show users with id greater than or equal to 4.
