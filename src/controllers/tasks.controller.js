import Task from "../models/Task"

export const findTasks = async (req, res) => {
  const tasks = await Task.find().lean()

  //console.log(tasks[0]) //? Nos trae el ObjectId, lo que no es un objeto de JS, o sea que da error al recorrerlo. Entonces usamos lean() para tener un array objeto nativo

  res.render("index", { tasks })
}

export const renderEditTask = async (req, res) => {
  const task = await Task.findById(req.params.id).lean()

  res.render("edit", { task })
}

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body)

    await task.save()
  } catch (err) {
    console.log(err)
  }

  res.redirect("/")
}

export const editTask = async (req, res) => {
  //Tendría que ser PUT, pero como lops HTML form solo tienen POST, entonces usamos eso para no agregar JS

  await Task.findByIdAndUpdate(req.params.id, req.body)

  res.redirect("/")
}

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id)

  res.redirect("/")
}

export const toggleTaskDone = async (req, res) => {
  const task = await Task.findById(req.params.id).lean()

  task.done = !task.done

  await Task.findByIdAndUpdate(req.params.id, task)

  res.redirect("/")
}
