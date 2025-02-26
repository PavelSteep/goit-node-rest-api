const contactsServices = require("../services/contactsServices");
const { HttpError, ctrlWrapper } = require("../helpers");

const listContacts = async (req, res) => {
  const contacts = await contactsServices.listContacts();
  res.json(contacts);
};

const getContactById = async (req, res) => {
  const contact = await contactsServices.getContactById(req.params.id);
  if (!contact) throw HttpError(404, "Not found");
  res.json(contact);
};

const addContact = async (req, res) => {
  const newContact = await contactsServices.addContact(req.body.name, req.body.email, req.body.phone);
  res.status(201).json(newContact);
};

const removeContact = async (req, res) => {
  const contact = await contactsServices.removeContact(req.params.id);
  if (!contact) throw HttpError(404, "Not found");
  res.json(contact);
};

const updateContact = async (req, res) => {
  const updatedContact = await contactsServices.updateContact(req.params.id, req.body);
  if (!updatedContact) throw HttpError(404, "Not found");
  res.json(updatedContact);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  removeContact: ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
};
