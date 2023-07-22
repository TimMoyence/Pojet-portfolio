const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  const { experience } = req.app.locals;
  const { skills } = req.app.locals;
  const { savoirEtre } = req.app.locals;
  const { formation } = req.app.locals;
  
  res.render("index");
});

module.exports = router;
