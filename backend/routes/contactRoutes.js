const express = require("express");
const router = express.Router();
const {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
// Contacts that respond to /api/contacs
router.route("/").get(getContacts).post(createContact);
// All Requests requiring id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;