import express from 'express';
import {
    getAllBoards,
    getBoardById,
    createBoard,
    updateBoard,
    deleteBoard
} from '../controllers/BoardController.js';

const router = express.Router();

router.get('/', getAllBoards);               // Retrieve all boards
router.get('/:id', getBoardById);            // Retrieve a specific board by ID
router.post('/', createBoard);               // Create a new board
router.put('/:id', updateBoard);            // Update an existing board by ID
router.delete('/:id', deleteBoard);         // Delete a board by ID

export default router;
