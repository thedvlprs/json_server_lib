const axios = require('axios');

// TODO: JSON Server full text search
// A full text search can be performed with the q parameter:

axios
    .get('http://localhost:3000/users?q=yahoo')
    .then((resp) => {
        console.log(resp.data);
    })
    .catch((error) => {
        console.log(error);
    });

// The code example searches for the yahoo term.
