/*
const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const homePageController = require('../controllers/homePageController');
const auth = require('../validation/authValidation');
const passport =  require('passport');
const initPassportLocal = require('../controllers/passportLocalController');


const router = express.Router();

initPassportLocal();

let initWebRoutes = (app) => {
    router.get("/", loginController.checkLoggedIn,  homePageController.getHomePage );


router.get("/login", loginController.checkLoggedOut,loginController.getLoginPage);
router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    successFlash: true,
    failureFlash: true
}));
router.get("/register", registerController.getRegisterPage);
router.post("/register", auth.validateRegister,  registerController.createNewUser);
router.post("/logout", loginController.postLogOut);
return app.use("/", router);
};

module.exports = initWebRoutes
*/

const express = require('express');
const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const homePageController = require('../controllers/homePageController');
const auth = require('../validation/authValidation');
const passport = require('passport');
const initPassportLocal = require('../controllers/passportLocalController');

const router = express.Router();

// Initialize Passport local strategy
initPassportLocal();
/*
let initWebRoutes = (app) => {
    // Ensure middleware functions come before the route handler
    router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);

    router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
    
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getRegisterPage);
    
    // Validate registration before creating a new user
    router.post("/register", auth.validateRegister, registerController.createNewUser);

    router.post("/logout", loginController.postLogOut);

    return app.use("/dashboard.ejs", router);
};

module.exports = initWebRoutes;
*/
let initWebRoutes = (app) => {
    // Ensure middleware functions come before the route handler
    router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);

    router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
    
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/register", registerController.getRegisterPage);
    
    // Validate registration before creating a new user
    //router.post("/register", auth.validateRegister, registerController.createNewUser);

    //router.post("/logout", loginController.postLogOut);

    // Remove the return statement and directly use app.use to mount the router
    app.use("/dashboard.ejs", router);
};

module.exports = initWebRoutes;
