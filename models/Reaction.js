const { Schema, Types } = require("mongoose");
const dayjs = require("dayjs"); // Import dayjs for formatting dates

const reactionSchema = new Schema(
  {
    // Unique identifier for each reaction
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    // Timestamp for when the reaction was created, defaults to the current time, formatted using dayjs
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => dayjs(createdAt).format("DD/MM/YYYY hh:mm:ss"),
    },
  },
  {
    // Include virtual properties and getters in JSON output, omit the id field
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
