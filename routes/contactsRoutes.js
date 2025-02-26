const express = require("express");
const router = express.Router();
const contactsControllers = require("../controllers/contactsControllers");
const validateBody = require("../helpers/validateBody");
const { addSchema, updateSchema } = require("../schemas/contactsSchemas");

router.get("/", contactsControllers.listContacts);
router.get("/:id", contactsControllers.getContactById);
router.post("/", validateBody(addSchema), contactsControllers.addContact);
router.delete("/:id", contactsControllers.removeContact);
router.put("/:id", validateBody(updateSchema), contactsControllers.updateContact);

module.exports = router;
