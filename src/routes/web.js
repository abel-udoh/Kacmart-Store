const express = require('express');
const router = express.Router();
import auth from "../validation/authValidation";
let initWebRoutes = (app) => {
    router.get("/", (req, res)=>{ 
        return res.render("index.html")
});

router.get("/login", loginController.getLoginPage);

router.get("/register", registerController.getRegisterPage);
router.post("/register", auth.validateRegister,  registerController.createNewUser);
return app.use("/", router);
};

module.exports = initWebRoutes