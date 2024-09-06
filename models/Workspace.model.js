import mongoose from 'mongoose';
import { type } from 'os';

const WorkspaceSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: String,
        members: [{ type: String }], // If members are just strings, adjust accordingly
        tasks: [{ type: String }], // If tasks are just strings, adjust accordingly
        boards: [{ type: String }] ,// If boards are just strings, adjust accordingly
        visibility:[{type:String ,enum:['Public','Private']}]
    },
    { timestamps: true }
);

const WorkspaceModel = mongoose.model("Workspace", WorkspaceSchema);
export default WorkspaceModel;
