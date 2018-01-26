

const Discord = require('discord.js');
require('dotenv').config();



const client = new Discord.Client();

const Middleware = require('./middleware/Middleware');

const checkIfWednesday = require('./middleware/checkIfWednesday/');
const getWedYoutubeVideo = require('./middleware/getWedYoutubeVideo/');
const pingPong = require('./middleware/pingPong/');

const bangModules = require("./middleware/bangModules");




const botMiddleware = new Middleware();

client.on("ready", () => {
  console.log("Started on: " + new Date());
  console.log("Your bot name is: " + process.env.botName)
  botMiddleware.add(checkIfWednesday);
  botMiddleware.add(getWedYoutubeVideo);
  botMiddleware.add(pingPong);
  botMiddleware.add(bangModules);
});

client.on('message', (message) => {
  botMiddleware.run(message);
});

client.login(process.env.token);
