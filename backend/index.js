const express = require('express');
const env = require('./config/envConfig');
const connect = require('./config/db');
const userRoutes = require('./routes/users/userRoutes');
const app = express();

//DB connection
connect();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.json({msg:'Welcome to EBazar!!!'});
});

//user routes
app.use('/api', userRoutes); 

const port = env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
})