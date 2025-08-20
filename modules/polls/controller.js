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
      details: error,
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

  const poll = await Poll.findById(pollId);

    // IF NON then response 404
  if (!pollId) {
    return res.status(404).json({ error: 'Poll not found' });
  }
  
  return res.json({
    success: 'Successfully get one poll',
    data: {poll}, // Replace with actual poll data
  });
}
