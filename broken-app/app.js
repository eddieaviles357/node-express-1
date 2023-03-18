const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json())

app.use('/', routes);

// handle error
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    return res.json({
        error: err.message
    });
});

app.listen(3000);
