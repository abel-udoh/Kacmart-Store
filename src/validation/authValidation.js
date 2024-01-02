//import { check } from "express-validator";
const { check } = require('express-validator');
/** 
let validateRegister = [
    check( fields, "email", message: "Invalid email").isEmail().trim(),
    check( fields: "password", message: "Invalid password. Password must be atleast two characters long").isLength(options: { min: 2 }),
    check( fields: "passwordConfirmation", message: "Password Confirmation does not match").custom( validatior: (value, { req }) => {
        return value === req.body.password
    })
];

module.exports = {
    validateRegister: validateRegister
}

import { check } from "express-validator";
**/
let validateRegister = [
  check("Email", "Invalid email").isEmail().trim(),
  check("Password", "Invalid password. Password must be at least two characters long").isLength({ min: 2 }),
  check("ConfirmationPassword", "Password Confirmation does not match").custom((value, { req }) => {
    return value === req.body.password;
  }),
];

module.exports = {
  validateRegister: validateRegister,
};
