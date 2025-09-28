const mongooose = require("mongoose");
require("dotenv").config({quiet:true})




const connectDB = async()=> {
    try{
        await mongooose.connect(process.env.MONGODB_URL)
        console.log('database connected successfully!');
        
    }
    catch(err){
        console.log(`This is DB connection err like : ${err}`)
        process.exit('1')  // Matlab: "DB connection nahi bani → server ko abhi band kar do." Ye ek safety step hai taaki app incomplete state me run na kare.


    }
}

module.exports= connectDB