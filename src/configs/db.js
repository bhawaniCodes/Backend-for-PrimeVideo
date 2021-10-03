require("dotenv").config();
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        `mongodb+srv://${process.env.DB_MOD}:${process.env.DB_MOD_PASS}@cluster0.zu9tq.mongodb.net/PrimeVideoDatabase?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
};

module.exports = connect;
