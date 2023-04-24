
const express = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");
const mongoose = require("mongoose");


const app = express();
app.use(cors())
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/contactDB",
 {
    useNewUrlParser: true,
}
);
const contactSchema = new mongoose.Schema({
    name: String,
  phoneNumber: Number,
  email: String,
  location: String,
  message: String,
});


const Contact = mongoose.model("Contact", contactSchema);

// const people = [
//     {
//         name:"Adeola",
//         phoneNumber:"08085767575",
//         email:"deola@gmail.com",
//         location:"gwarimpa abuja",
//         message:"I want to create a mobile app can you do that for me",
//     }
// ]

app.get("/",(req,res)=>{
    
  });
// res.json(data);

app.post("/contact", (req,res)=>{
    const {name,phoneNumber,email,location,message} = req.body;
const data = {
   name:name,
        phoneNumber:phoneNumber,
        email:email,
        location:location,
        message:message,
}
Contact.create([data]).save()

})


const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`listening @port ${PORT}`)
})