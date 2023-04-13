import { Router } from "express"
import {
  findTasks,
  renderEditTask,
  addTask,
  editTask,
  deleteTask,
  toggleTaskDone,
} from "../controllers/tasks.controller"

const router = Router()

router.get("/", findTasks)

router.post("/tasks/add", addTask)

router.get("/tasks/:id/edit", renderEditTask)

router.post("/tasks/:id/edit", editTask)

router.get("/tasks/:id/delete", deleteTask)

router.get("/tasks/:id/toggleDone", toggleTaskDone)

export default router

//? Es mucho más ordenado si EJ: todas las rutas afectan a las tasks, entonces agruparlas a todas con el prefijo /tasks
