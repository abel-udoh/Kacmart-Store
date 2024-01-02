let getHomePage = (req, res) => {
    return res.render("index.html", {
        user: req.user
    });
};

module.exports = {
    getHomePage: getHomePage
} 