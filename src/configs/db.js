const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://primeuser:Prime@mongo@cluster0.zu9tq.mongodb.net/PrimeVideoDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }
    );
};

module.exports = connect;
