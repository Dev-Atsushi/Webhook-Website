const Discord = require("discord.js");
const {
    response
} = require("express");
const webhookClient = new Discord.WebhookClient("Id do seu webhook", "Token do seu webhook");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
    webhookClient.send("Olá, um usuário acessou o website.")
});

const listener = app.listen(process.env.PORT, () => {
    console.log(listener.address().port);
});
