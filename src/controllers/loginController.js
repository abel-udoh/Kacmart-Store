let getLoginPage = (req, res) => {
    return res.render("login.html", {
        errors: req.flash("errors")
    });
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/login")
    });
};

module.exports = {
    getLoginPage: getLoginPage,
    checkLoggedOut: checkLoggedOut,
    checkLoggedIn: checkLoggedIn
};