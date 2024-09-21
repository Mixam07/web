const express = require("express");
const Review = require("../models/review")
const router = new express.Router();

router.get("/reviews-api", (req, res) => {
    Review.find({})
    .then(reviews => {
        res.status(200).send({
            reviews,
            numberReviews: reviews.length
        })
    })
    .catch(e => {
        res.status(400).send(e)
    })
})

router.post("/reviews-api", (req, res) => {
    new Review(req.body).save()
    .then(review => {
        res.status(200).send(review)
    })
    .catch(e => {
        res.status(400).send(e)
    })
})


module.exports = router