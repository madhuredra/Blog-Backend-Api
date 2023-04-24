const mongoose  = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect(process.env.MONGO_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((res) => {
        console.log(`Database connected successfully !`);
    }).catch((err) => {
        console.log(`${err.message} while connecting database !`);
    })
}

module.exports = {dbConnect}