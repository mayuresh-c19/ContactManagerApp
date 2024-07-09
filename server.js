const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));

// If I have to send response ar Json
// app.get("/api/contacts", (req,res) =>{
//     res.json({message : "Get All Contacts"});
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});