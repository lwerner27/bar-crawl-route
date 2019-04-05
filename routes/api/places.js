const router = require('express').Router();
const axios = require("axios")
const googleKey = process.env.GOOGLE_KEY
const yelpKey = process.env.YELP_KEY
const yelp = require("yelp-fusion")

// const passport = require('passport');
// require('../../config/passport')(passport);
// const { getToken } = require("../../Shared")

router.get("/search/:searchLoc/:searchTerm", (req, res) => {
    const searchRequest = {
        term: req.params.searchTerm,
        location: req.params.searchLoc,
        radius: 10000,
        categories: "bars,breweries"
    };
      
    const client = yelp.client(yelpKey);

    client.search(searchRequest)
    .then(response => {
        res.json(response)
    }).catch(e => {
        res.json(e)
    });
})

module.exports = router