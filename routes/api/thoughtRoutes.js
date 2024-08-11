const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Routes for /api/thoughts
router
  .route("/")
  .get(getThoughts) // Retrieve all thoughts
  .post(createThought); // Add a new thought

// Routes for /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought) // Retrieve a thought by its ID
  .put(updateThought) // Modify a thought by its ID
  .delete(deleteThought); // Remove a thought by its ID

// Routes for /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  .post(addReaction) // Attach a reaction to a thought
  .delete(deleteReaction); // Delete a reaction from a thought

module.exports = router;
