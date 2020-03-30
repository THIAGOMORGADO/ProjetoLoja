const express = require('express');


const app = express();
app.get('/', (request, response) => {
    return response.json({
        evento: 'programando job ',
        dev: "thiago morgado"
    })
});
app.listen(3333);