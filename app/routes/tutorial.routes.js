module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const test = require("../controllers/test.controller.js");
  const bot = require("../controllers/bot.controller.js");

  var router = require("express").Router();
  var testrouter = require("express").Router();
  var botrouter = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  router.get("/", bot.findAll);

  testrouter.post("/recognition", test.recognition);
  botrouter.get("/", bot.findAll);

  app.use('/api/tutorials', router);
  app.use('/api/test', testrouter);
  app.use('/api/bot', botrouter);

};
