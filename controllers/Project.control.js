import Project from '../models/Projects.js';
import mongoose from 'mongoose';

// Get all projects
export const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get project by ID
export const getProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new project
export const createProject = async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ message: "Failed to create Project", error: err.message });
    }
};

// Update a project
export const updateProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findByIdAndUpdate(projectId, req.body, { new: true });
        if (!project) {
            return res.status(404).json({ message: "Project not found" });
        }
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a project
export const deleteProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) return res.status(404).json({ error: 'Project not found' });
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete Project', message: err.message });
    }
};

