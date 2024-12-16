const mongoose =require('mongoose')
const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_DB_CONNECTION_URI)
    .then((res)=>console.log("db connected!"))
    .catch((err)=>console.log(err.message))
}
module.exports=dbConnect