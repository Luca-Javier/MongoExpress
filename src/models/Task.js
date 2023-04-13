import { Schema, model } from "mongoose"

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // created_at y updated_at
    versionKey: false, // un campo generado automaticamente por mongo
  }
)

export default model("Task", taskSchema)
//Esta es una colleccion de datos, es decir, una tabla de datos. Mongoose nos agrega la s para que sea Tasks
