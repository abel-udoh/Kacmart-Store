const { validationResult } = require('express-validator');

let getRegisterPage = (req, res) => {
    return res.render("register.html", {
        errors: req.flash("errors")
    })
}; 

let createNewUser = async (req, res) => {
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

    //create a new user
    try {
        let newUser = {
            fullname: req.body.FullName,
            email: req.body.email,
            password: req.body.password
        };
        await registerService.createNewUser(newUser);
        return res.redirect("/login");
    }catch (e) {
        req.flash("errors", e);
        return res.redirect("/register");
    }
};


module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};