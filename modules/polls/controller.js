import { Poll } from './model.js';

export async function getAll(req, res) {
  const allPolls = await Poll.find();

  res.json({
    success: 'Successfully retrieved all polls',
    data: allPolls,
  });
};

// Add more logic
export async function create(req, res) {
  // GET all fields needed from req.body
  const { question, options } = req.body;
  // ATTEMPT to save
  const poll = new Poll({
    question,
    options,
  });
  // HANDLE error
  try {
    await poll.save();
  } catch (error) {
    res.status(400).json({
      error: 'Failed to create poll',
      details: error.message,
    });
    return;
  }
  // RESPONSE created status with poll
  res.status(201).json({
    success: 'Successfully created poll',
    // newly add poll
    data: poll,
  });
}

export async function getOne(req, res) {
  // FIND poll from req.params
  const pollId = req.params.id;
  // IF NON then response 404
  res.status(404).json({
    error: 'Poll not found',
  });
  // OTHERWISE response the poll
  res.json({
    success: 'Successfully get one poll',
    data: {}, // Replace with actual poll data
  });
}
