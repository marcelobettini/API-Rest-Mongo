const { check, validationResult } = require("express-validator");
console.log("validator runs...");
//working on this...
const validatorCreateUser = [
  check("fullName")
    .trim()
    .notEmpty()
    .withMessage("Field cannot be empty")
    .isAlpha("es-ES", { ignore: " " })
    .withMessage("Only letters")
    .isLength({ min: 2, max: 90 })
    .withMessage("Character count: min 2, max 90"),
  check("userName").trim().notEmpty().withMessage("Must choose a user name"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Field cannot be empty")
    .isEmail()
    .withMessage("Must be a valid email address")
    .normalizeEmail(),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Field cannot be empty")
    .isLength({ min: 8, max: 15 })
    .withMessage("Character count: min 8, max 15"),
  (req, res, next) => {
    console.count("in validator callback");
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    } else {
      return next();
    }
  },
];

module.exports = {
  validatorCreateUser,
};
