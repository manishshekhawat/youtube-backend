const mongoose=require("mongoose");
const {DB_NAME}=require("./constants")
const app=require("./app")
require("dotenv").config();




(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected");

        // app.on("error",(error)=>{
        //     console.log("Error: ",error)
        //     throw error;
        // })
        app.listen(process.env.PORT,()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error: ",error)
        throw error;
    }
})()