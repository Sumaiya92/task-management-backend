import express from "express"
import model from '../models/Task.models.js';
const router=express.Router();
import authenticate from '../authMiddleware.js'; // Adjust path as necessary
router.get('/protected-task', authenticate, (req, res) => {
    // Your route logic here
    res.send('This route is protected');
});


//http:localhost:5000/api/v1/task
//-Get 
router.get("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await model.findById(taskId);
    if (!task) {
        return res.status(404).send({ message: "Task not found" });
    }
    res.json(task);
} catch (error) {
    res.status(500).send({ message: "Error fetching task" });
}
}).get("/", async (req, res) => {
  try {
      const tasks = await model.find();
      res.json(tasks);
  } catch (error) {
      res.status(500).send({ message: "Error retrieving tasks" });
  }
}).post("/", async (req, res) => {
    try {
        const newTask = new model(req.body); // Create a new task instance with data from the request body
        await newTask.save(); // Save the new task to the database
        res.status(201).json(newTask); // Respond with the created task and a 201 status code
    } catch (error) {
        res.status(500).send({ message: "Error creating task" }); // Send error message if there's an issue
    }
}).put("/:id", async (req, res) => {
  try {
    const taskId = req.params.id;
    const updateTask = await model.findByIdAndUpdate(taskId, req.body, { new: true });
    if (!updateTask) {
      return res.status(404).send({ message: "Task not found" });
    }
    res.json(updateTask);
  } catch (error) {
    res.status(500).send({ message: "Error updating task" });
  }
})
.delete("/:id",async(req,res)=>
{
    try {
    const tasksId=req.params.id;
    const deleteTask=await model.findByIdAndDelete(tasksId);
    res.send({message:"Task Deleted"});
    }
    catch (error) {
        res.status(500).send({ message: "Error deleting task " }); // Send error message
        }

})


export default router 
