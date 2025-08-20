import { model, Schema } from 'mongoose';

const voteSchema = new Schema(
  {
    pollId: {
      type: ObjectId,
      required: true,
    },

    option: {
      type: String,
      required: true,
    },

    voter: {
      type: String,
      requred: false,
      enum: ['email', 'IP', 'user ID'],
      default: 'user ID',
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export const Vote = model('Vote', voteSchema);