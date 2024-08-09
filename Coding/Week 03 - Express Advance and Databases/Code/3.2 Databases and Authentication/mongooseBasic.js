const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://akshadsantoshjaiswal:rFw7NSxncTpSc7Bq@cluster0.yulixmn.mongodb.net/users_app?"
);

const User = mongoose.model("User", { name: String , email:String , password:String });

const user = new User({ name: "Akshad", email:"akshad@gmail.com" ,password:"999" });
const user2 = new User({ name: "Aaradhana", email:"aaradhana@gmail.com" ,password:"032002" });
user.save().then(()=>{console.log("Successfully inserted into database")})
user2.save().then(()=>{console.log("Successfully inserted into database")})
