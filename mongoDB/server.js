const app = require('./app');
const mongoose = require('mongoose');

const database_URL = "mongodb+srv://khannavansh2002:<password>@cluster0.expuwvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const database_password = 'AryanKhanna';

const db_url = database_URL.replace('<password>', database_password);

mongoose.connect(db_url).then(() => {
    console.log("Connected to database");
}).catch((error) => {
    console.log("Error connecting to database:", error);
});

const toursSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        required: true,
        type: Number
    },
    rating: {
        type: Number,
        default: 4.5
    },
    description: String
});

const Tour = mongoose.model('Tour', toursSchema);

const testTour = new Tour({
    name: 'MIT Tour',
    rating: 4.9,
    price: 13000,
    description: 'This is a test tour'
});

testTour.save().then((tour) => {
    console.log("Tour created:", tour);
}).catch((error) => {
    console.log("Error creating tour:", error);
});

const PORT = 1400;
app.listen(PORT, () => {
    console.log("******App listening at 1400*******");
});
