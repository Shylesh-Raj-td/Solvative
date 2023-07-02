const express = require("express");
const router = express.Router();
const reviewController = require('../controllers/review-controller')
// const Review = require("../models/Review");

router.get("/", reviewController.getAllReviews);
router.post("/", reviewController.addReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;