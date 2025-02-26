const express = require("express");
const router = express.Router();
const ctr = require("../../controllers/contactsControllers");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contactsSchemas");

router.get("/", ctr.listContacts);
router.get("/:id", ctr.getContactById);
router.post("/", validateBody(schemas.addSchema), ctr.addContact);
router.put("/:id", validateBody(schemas.updateSchema), ctr.updateContact);
router.delete("/:id", ctr.removeContact);

module.exports = router;
