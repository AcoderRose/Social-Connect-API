const { User, Thought } = require("../models");

module.exports = {
  // Retrieve all thoughts - /api/thoughts
  async getThoughts(_req, res) {
    try {
      const thoughts = await Thought.find().select("-__v");
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Retrieve a single thought by ID - /api/thoughts/:thoughtId
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select("-__v");
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new thought - /api/thoughts
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      const updatedUser = await User.findByIdAndUpdate(
        req.body.userId,
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );
      res.json({
        message: "Thought successfully created",
        thought,
        updatedUser,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update an existing thought - /api/thoughts/:thoughtId
  async updateThought(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        req.body,
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      res.json({ message: "Thought successfully updated", thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a thought by ID - /api/thoughts/:thoughtId
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });
      if (!thought) {
        return res
          .status(404)
          .json({ message: "No thought found with this ID" });
      }
      await User.findByIdAndUpdate(
        req.body.userId,
        { $pull: { thoughts: req.params.thoughtId } },
        { runValidators: true, new: true }
      );
      res.json({ message: "Thought successfully deleted" });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Add a reaction to a specific thought - /api/thoughts/:thoughtId/reactions
  async addReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({ message: "Thought not found. Reaction could not be added." });
      }
      res.json({ message: "Reaction added successfully", thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Remove a reaction from a specific thought - /api/thoughts/:thoughtId/reactions
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { reactionId: req.body.reactionId } } },
        { runValidators: true, new: true }
      );
      if (!thought) {
        return res
          .status(404)
          .json({
            message: "Thought not found. Reaction could not be removed.",
          });
      }
      res.json({ message: "Reaction removed successfully", thought });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
