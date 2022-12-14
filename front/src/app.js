const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

// Define paths for express config
const publicDirPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory
app.use(express.static(publicDirPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Can AI Preserve Our Science Legacy?",
        name: "Los del espacio"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "Los del espacio",
        errorMessage: "Page not found"
    })
})

app.listen(8080, () => {
    console.log("App is up on port 8080")
})
