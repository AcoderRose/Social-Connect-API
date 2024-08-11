const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// Routes for /api/users
router
  .route("/")
  .get(getUsers) // Retrieve all users
  .post(createUser); // Add a new user

// Routes for /api/users/:userId
router
  .route("/:userId")
  .get(getSingleUser) // Retrieve a user by ID
  .put(updateUser) // Modify a user by ID
  .delete(deleteUser); // Remove a user by ID

// Routes for /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // Attach a friend to a user
  .delete(deleteFriend); // Delete a friend from a user

module.exports = router;
