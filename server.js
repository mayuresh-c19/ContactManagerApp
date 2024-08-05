const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

connectDB(); // Not to Connect When Using Homies5G
const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

// If I have to send response ar Json
// app.get("/api/contacts", (req,res) =>{
//     res.json({message : "Get All Contacts"});
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});