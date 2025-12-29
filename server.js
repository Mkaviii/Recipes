

const mongoose =require('mongoose');
const app = require('./app');

require('dotenv').config();


// listen for incomeing requests(start the server)
app.listen(3001, 'localhost', () => {
  console.log('Server is running on http://localhost:3001');
});

//connected to mongoose
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log('Connected to MongoDB')

        // listen for incomeing requests(start the server)
app.listen(3001, 'localhost', () => {
  console.log('Server is running on http://localhost:3001');
});

    })
    .catch((err)=>console.error('could not connect to MongoDB',err));


