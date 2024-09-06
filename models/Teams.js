import mongoose from 'mongoose';

const TeamSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Team name
    description: String, // Optional description
    leader: { type: String, required: true }, // Team leader (required)
    members: [{ type: String }], // Array of member IDs
    projects: [{ type: String }] // Array of project IDs
  },
  { timestamps: true }
);

const TeamModel = mongoose.model("Team", TeamSchema);
export default TeamModel;
