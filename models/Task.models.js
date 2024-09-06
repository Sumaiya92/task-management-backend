import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: { type: Date, required: true },
  completed: { type: Boolean, default: false },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' }, // Status field with options
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
