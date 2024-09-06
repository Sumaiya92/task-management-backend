import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true }, // Name of the project, required
        description: String, // Optional description of the project
        owner: { type: String, required: true }, // Owner stored as a string
        workspace: { type: String, required: true }, // Workspace stored as a string
        team: { type: String }, // Team stored as a string (optional)
        tasks: [{ type: String }] // Array of task IDs stored as strings
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const ProjectModel = mongoose.model("Project", ProjectSchema); // Model name "Project"
export default ProjectModel;
