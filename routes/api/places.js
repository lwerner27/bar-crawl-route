const router = require('express').Router();
const axios = require("axios")
const apiKey = process.env.GOOGLE_KEY
// const passport = require('passport');
// require('../../config/passport')(passport);
// const { getToken } = require("../../Shared")

router.get("/search/:queryText", (req, res) => {
    axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${queryText}&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,geometry&key=${apiKey}`)
})

module.exports = router