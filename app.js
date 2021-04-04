const express = require("express"),
app = express(),
bodyparser = require("body-parser"),
cors = require("cors");

const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyparser.json());
app.use(cors(corsOptions));

require("./dbConfig");

const PORT =  5000;

//routes 
const troopRoutes = require("./router/index.router");

app.use("/api/TroopTech", troopRoutes);

app.listen(PORT, function () {
    console.log("Trooptech server started on:" + PORT);
});