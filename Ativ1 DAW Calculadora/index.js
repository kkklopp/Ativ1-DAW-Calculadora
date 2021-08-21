const express = require("express");
const app = express();
var numbersRoute = require('./routes/numbersRoute');

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/number",numbersRoute);

app.listen("3000",function()
{
    console.log("projeto funcionando!");
});