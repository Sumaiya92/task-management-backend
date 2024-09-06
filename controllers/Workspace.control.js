import WorkspaceModel from '../models/Workspace.model.js';

// Get all workspaces
export const getAllWorkSpaces = async (req, res) => {
  try {
    const workspaces = await WorkspaceModel.find();
    res.json(workspaces);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workspaces' });
  }
};

// Get a workspace by ID
export const getWorkspaceById = async (req, res) => {
  try {
    const workspace = await WorkspaceModel.findById(req.params.id);
    if (!workspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json(workspace);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workspace' });
  }
};

// Create a new workspace
export const createWorkspace = async (req, res) => {
  const { name, description, owner } = req.body;

  if (!name || !owner) {
    return res.status(400).json({ message: 'Name and Owner are required' });
  }

  try {
    const newWorkspace = new WorkspaceModel({ name, description, owner });
    await newWorkspace.save();
    res.status(201).json(newWorkspace);
  } catch (error) {
    res.status(500).json({ message: 'Error creating workspace' });
  }
};

// Update a workspace
export const updateWorkspace = async (req, res) => {
  const { name, description, owner } = req.body;

  try {
    const updatedWorkspace = await WorkspaceModel.findByIdAndUpdate(
      req.params.id,
      { name, description, owner },
      { new: true }
    );
    if (!updatedWorkspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json(updatedWorkspace);
  } catch (error) {
    res.status(500).json({ message: 'Error updating workspace' });
  }
};

// Delete a workspace
export const deleteWorkspace = async (req, res) => {
  try {
    const deletedWorkspace = await WorkspaceModel.findByIdAndDelete(req.params.id);
    if (!deletedWorkspace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json({ message: 'Workspace deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting workspace' });
  }
};
