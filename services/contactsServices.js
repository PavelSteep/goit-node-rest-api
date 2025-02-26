const contacts = [];
const { v4: uuidv4 } = require("uuid");

const listContacts = async () => {
  return contacts;
};

const getContactById = async (id) => {
  return contacts.find((contact) => contact.id === id) || null;
};

const addContact = async (name, email, phone) => {
  const newContact = { id: uuidv4(), name, email, phone };
  contacts.push(newContact);
  return newContact;
};

const removeContact = async (id) => {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) return null;
  return contacts.splice(index, 1)[0];
};

const updateContact = async (id, data) => {
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) return null;
  contacts[index] = { ...contacts[index], ...data };
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};
