import { model, Schema } from 'mongoose';

const votesSchema = new Schema(
  {
    pollId: {
      type: Schema.Types.ObjectId,
      ref: 'Poll',
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

    email: {
      type: String,
      ref: 'email',
      required: false,
      default: 'userId',
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'userId',
      required: false,
      default: 'userId',
    },

    ipAddress: {
      type: String,
      ref: 'ipAddress',
      required: false,
      default: 'userId',
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  },
);

export const Votes = model('Votes', votesSchema);