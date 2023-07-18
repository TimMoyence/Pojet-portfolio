const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  const { experience } = req.app.locals;
  const { skill } = req.app.locals;
  const { savoirEtre } = req.app.locals;

  res.render("index");
});

module.exports = router;
