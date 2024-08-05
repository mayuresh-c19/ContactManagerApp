const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id : req.user.id});
  res.status(200).json(contacts);
});

//@desc get Individual contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.status(200).json(contact);
});

//@desc Create contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The Request Body is : ", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields are Madatory");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id : req.user.id,
  });
  res.status(201).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("Unauthorized User Trying to Access");
  }

  // Log the request body to ensure it contains the expected fields
  console.log('Request Body:', req.body);

  // Validate and sanitize req.body here if necessary

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedContact) {
    res.status(400);
    throw new Error("Failed to update contact");
  }

  res.status(200).json({ message: `Contact Updated: ${updatedContact.name}`, updatedContact });
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }

  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("UnAuthorized User Trying to Access");
  }

  await Contact.deleteOne(contact);
  res
    .status(200)
    .json({ message: `Deleted Contact of ${contact.name}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
