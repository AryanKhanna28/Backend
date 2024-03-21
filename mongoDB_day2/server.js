const app = require('./app');
const mongoose = require('mongoose');

const database_URL = "mongodb+srv://khannavansh2002:<password>@cluster0.expuwvl.mongodb.net/<name>?retryWrites=true&w=majority&appName=Cluster0";
const database_password = 'AryanKhanna';
const db_name = 'tesing'

const db_url = database_URL.replace('<password>', database_password).replace('<name>',db_name);

mongoose.connect(db_url).then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log("Error connecting to database:", error);
});

const PORT = 1400;
app.listen(PORT, () => {
    console.log("******App listening at 1400*******");
});
