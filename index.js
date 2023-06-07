const express = require('express');
const db=require('./Config/db');
const { verifyToken } = require('./Middlewares/verifyToken');
const userRoute=require('./Routes/User');
const app = express();
const port = 3333;


app.use(express.json());
app.use('/api/user',userRoute);
app.use('/api/product',userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
