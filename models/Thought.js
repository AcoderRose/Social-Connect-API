// Import Schema and model from mongoose for defining and creating the Thought schema
const { Schema, model } = require("mongoose");
// Import dayjs for date formatting functionality
const dayjs = require("dayjs");

// Import the Reaction schema to use as a subdocument
const reactionSchema = require("./Reaction");

// Define the Thought schema
const thoughtSchema = new Schema(
  {
    // Main content of the thought, required, must be between 1 and 280 characters
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    // Timestamp for when the thought was created, defaults to the current time, formatted using dayjs
    createdAt: {
      type: Date,
      default: Date.now,
      // Format the date using dayjs
      get: (createdAt) => dayjs(createdAt).format("DD/MM/YYYY hh:mm:ss"),
    },
    // Username of the thought's author, required
    username: {
      type: String,
      required: true,
    },
    // Array of reactions associated with the thought, using the Reaction schema
    reactions: [reactionSchema],
  },
  {
    // Ensure virtual properties and formatted date are included in JSON output
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Define a virtual property to retrieve the count of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  try {
    return this.reactions.length;
  } catch {
    return 0;
  }
});

// Create and export the Thought model based on the schema
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
