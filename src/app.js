import express from "express"
import indexRoutes from "./routes/index.routes"
import { create } from "express-handlebars"
import path from "path"
import morgan from "morgan"
import "./database"

const app = express()

//Config views
app.set("views", path.join(__dirname, "/views"))

const hbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
})

app.engine(".hbs", hbs.engine)
app.set("view engine", ".hbs")

//Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false }))

//Routes
app.use(indexRoutes)

//static files
app.use(express.static(path.join(__dirname, "public")))

export default app
