const express = require('express');
const app = express();
const port = 3307;

app.listen(port, () => {
    console.log(`Server on port ${port}`)
})
