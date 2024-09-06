import express from 'express';
import cors from 'cors';
import userRouter from './routes/User.js';
import registerRoute from './routes/Register.route.js';
import taskRoute from './routes/Task.route.js';
import workspaceRoutes from './routes/workspace.route.js';
import teamRoutes from './routes/Teams.route.js';
import projectRoutes from './routes/Project.route.js';



const app = express();

app.use(express.json()); // To parse JSON bodies
app.use(cors());

app.use('/register', registerRoute);
app.use('/login', userRouter);
app.use('/task', taskRoute);
app.use('/workspaces', workspaceRoutes);
app.use('/teams', teamRoutes);
app.use('/projects', projectRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
