import { model, Schema } from 'mongoose';

const pollSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    
    options: {
      type: [String],
      required: true,
    },

    status: {
      type: String,
      required: false,
      enum: ['active', 'inactive', 'archived'],
      default: 'active',
    },
  },
  {
    timestamps: { createAt: true, updatedAt: true },
  }
);

const voteSchema = new Schema(
  {
    pollId: {
      type: ObjectId,
      required: true,
    },

    options: {
      type: String,
      required: required,
    },

    voter: {
      type: String,
      requred: false,
      enum: ['email', 'ipAdress', 'userId'],
      default: 'userId',
    },
  },
  {
    timestamps: { createAt: true, updatedAt: true },
  }
);

export const Poll = model('Poll', pollSchema);
export const Vote = model('Vote', voteSchema);
