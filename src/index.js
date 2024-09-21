const path = require("path");
const express = require("express");
const hbs = require("hbs");
require("./db/mongoose");
const reviewRouter = require("./routers/review");

const app = express();

//Define path for Express config
app.use(express.static(path.join(__dirname, '../public')));
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials")

//Setup hendlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialPath);

app.use(express.json());
app.use(reviewRouter);

const getTime = () => {
    const time = new Date();
    const formattedDate = time.toLocaleDateString('en-CA');

    const formattedTime = time.toLocaleTimeString('en-GB', { hour12: false });

    return `${formattedDate} ${formattedTime}`
}

app.get("", (req, res) => {
    res.render("index",{
        time: getTime()
    })
})

app.get("/about", (req, res) => {
    res.render("about",{
        time: getTime()
    })
})

app.get("/reviews", (req, res) => {
    res.render("reviews")
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/table", async (req, res) => {
    const response = await fetch('http://lab.vntu.org/api-server/lab8.php?user=student&pass=p@ssw0rd');
    const data = await response.json();

    res.render("table", { data })
})

app.get("/khmilnyk", (req, res) => {
    res.render("cities/khmilnyk",{
        time: getTime()
    })
})

app.get("/tulchyn", (req, res) => {
    res.render("cities/tulchyn",{
        time: getTime()
    })
})

app.get("/zhmerynka", (req, res) => {
    res.render("cities/zhmerynka",{
        time: getTime()
    })
})

app.get("/france", (req, res) => {
    res.render("countries/france",{
        time: getTime()
    })
})

app.get("/ukraine", (req, res) => {
    res.render("countries/ukraine",{
        time: getTime()
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
});