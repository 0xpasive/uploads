const express = require('express');
const uploadRoutes = require('./routes/uploadRoutes'); 

const app = express();
const port = 3000;

app.use('/', uploadRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

