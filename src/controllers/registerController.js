import { validationResult } from "express-validator";

let getRegisterPage = (req, res) => {
    return res.render("register.html", {
        errors: req.flash("errors")
    })
}; 

let createNewUser = (req, res) => {
    //validate all required fields
    let errorsArr =[];
    let ValidationErrors = validationResult(req);
    if(!ValidationErrors.isEmpty()){
        let errors = Object.values(ValidationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/register");
    }
};

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};