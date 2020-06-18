const axios = require('axios');

// TODO: JSON Server sorting data
// In the next example, we sort our data:
axios
    .get('http://localhost:3000/users?_sort=last_name&_order=asc')
    .then((resp) => {
        data = resp.data;
        data.forEach((e) => {
            console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// The code example sorts data by the users' last name in ascending order. We use the _sort and _order query parameters.
