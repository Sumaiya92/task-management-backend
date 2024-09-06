import express from 'express';
import {
    getAllWorkSpaces,
    getWorkspaceById,
    createWorkspace,
    updateWorkspace,
    deleteWorkspace
} from '../controllers/Workspace.control.js';

const router = express.Router();

router.get('/', getAllWorkSpaces);
router.get('/:id', getWorkspaceById);
router.post('/', createWorkspace);
router.put('/:id', updateWorkspace);
router.delete('/:id', deleteWorkspace);

export default router;
