const Review = require("../models/Review");

const getAllReviews = async (req, res, next) => {
    let reviews;
    try {
        reviews = await Review.find();
    } catch (err) {
      console.log(err);
    }
  
    if (!reviews) {
      return res.status(404).json({ message: "No reviews found" });
    }
    return res.status(200).json({ reviews });
};

const addReview = async (req, res, next) => {
    const { title, description } = req.body;
    let review;
    try {
        review = new Review({
        title,
        description,
      });
      await review.save();
    } catch (err) {
      console.log(err);
    }
  
    if (!review) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ review });
};

const updateReview = async (req, res, next) => {
    const id = req.params.id;
    const { title, description } = req.body;
    let review;
    try {
      review = await Review.findByIdAndUpdate(id, {
        title,
        description,
      });
      review = await review.save();
    } catch (err) {
      console.log(err);
    }
    if (!review) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ review });
};

const deleteReview = async (req, res, next) => {
    const id = req.params.id;
    let review;
    try {
      review = await Review.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!review) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Review Successfully Deleted" });
};

module.exports.getAllReviews = getAllReviews;
module.exports.addReview = addReview;
module.exports.updateReview = updateReview;
module.exports.deleteReview = deleteReview;