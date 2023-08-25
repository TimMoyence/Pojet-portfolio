const { Router } = require("express");
const router = Router();
const { catchErrors } = require("../../middleware/errorHandlers.js");
const homeController = require("../controllers/homeController.js")
const formController = require("../controllers/formController.js")

router.get("/", homeController.home)
router.post("/", formController.contact)

module.exports = router;
