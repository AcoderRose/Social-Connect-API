// Import Schema and model from mongoose
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    // Regular expression for validating email addresses
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Invalid email address",
      ],
    },
    // Array of ObjectIds referencing Thought documents
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    // Array of ObjectIds referencing User documents
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    // Include virtual properties in JSON output
    toJSON: {
      virtuals: true,
    },
    // Exclude the default id field
    id: false,
  }
);

// Virtual property to retrieve the number of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
