const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist/shop`));

app.get('*', (req, res) => {
    res.sendFile(`./dist/shop/index.html`, { root: __dirname }); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)