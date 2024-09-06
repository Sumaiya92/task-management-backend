import Team from '../models/Teams.js';
import mongoose from 'mongoose';

// Get all teams
export const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get team by ID
export const getTeamById = async (req, res) => {
    try {
        const teamId = req.params.id;
        const team = await Team.findById(teamId);
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        res.status(200).json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new team
export const createTeam = async (req, res) => {
    try {
        const newTeam = new Team(req.body);
        await newTeam.save();
        res.status(201).json(newTeam);
    } catch (err) {
        res.status(500).json({ message: "Failed to create Team", error: err.message });
    }
};

// Update a team
export const updateTeam = async (req, res) => {
    try {
        const teamId = req.params.id;
        const team = await Team.findByIdAndUpdate(teamId, req.body, { new: true });
        if (!team) {
            return res.status(404).json({ message: "Team not found" });
        }
        res.status(200).json(team);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a team
export const deleteTeam = async (req, res) => {
    try {
        const teamId = req.params.id;
        const deletedTeam = await Team.findByIdAndDelete(teamId);
        if (!deletedTeam) return res.status(404).json({ error: 'Team not found' });
        res.json({ message: 'Team deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete Team', message: err.message });
    }
};

