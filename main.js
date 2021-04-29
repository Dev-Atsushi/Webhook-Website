const {
    Discord
} = require("discord.js");
const {
    response
} = require("express");
const {
    config
} = require("./config.js")

const webhookClient = new Discord.WebhookClient(config.webhookId, config.webhookToken);
const express       = require("express");
const app           = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
    webhookClient.send("A user has accessed the website.")
});

const listener = app.listen(process.env.PORT, () => {
    console.log(listener.address().port);
});
