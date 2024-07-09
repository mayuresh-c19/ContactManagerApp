const express = require("express");
const router = express.Router();

// Get Route
router.route("/").get((req,res) =>{
    res.status(200).json({message : "Get All Contacts"});
});

// Get Individual Contact Route
router.route("/:id").get((req,res) =>{
    res.status(200).json({message : `Get Contact for ${req.params.id}`});
});

// Post Route
router.route("/").post((req,res) =>{
    res.status(200).json({message : "Create Contact"});
});

// Put Route
router.route("/:id").put((req,res) =>{
    res.status(200).json({message : `Update Contact for ${req.params.id}`});
});

// Delete Route
router.route("/:id").delete((req,res) =>{
    res.status(200).json({message : `Delete Contact for ${req.params.id}`});
});




module.exports = router;