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
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export const Poll = model('Poll', pollSchema);

