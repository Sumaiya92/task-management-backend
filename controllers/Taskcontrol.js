import Task from '../models/Task.js';

// Update task completion status
export const updateTaskCompletion = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { completed }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ error: 'Error updating task completion status.' });
  }
};