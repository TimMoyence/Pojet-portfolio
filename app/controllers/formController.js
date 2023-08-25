const formController = {
    async contact(req, res){
        const { name, email, message } = req.body;
        console.log(name);
        console.log(email);
        console.log(message);
        res.redirect("/#scrollspyHeading5");
    },

}

module.exports = formController