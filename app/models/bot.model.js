const sql = require("./db.js");

// constructor
const Bot = function(Bot) {
  this.botid = Bot.botid;
  this.botname = Bot.botname;
  this.accountKey = Bot.accountKey;
  this.percent = Bot.percent;
  this.updateTime = Bot.updateTime;
};

Bot.create = (newBot, result) => {
  sql.query("INSERT INTO Bot SET ?", newBot, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Bot: ", { id: res.insertId, ...newBot });
    result(null, { id: res.insertId, ...newBot });
  });
};

Bot.findById = (id, result) => {
  sql.query(`SELECT * FROM Bot WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Bot: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Bot with the id
    result({ kind: "not_found" }, null);
  });
};

Bot.getAll = (title, result) => {
  let query = "SELECT * FROM Bot";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Bot: ", res);
    result(null, res);
  });
};

Bot.getAllPublished = result => {
  sql.query("SELECT * FROM Bot WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Bot: ", res);
    result(null, res);
  });
};

Bot.updateById = (id, Bot, result) => {
  sql.query(
    "UPDATE Bot SET title = ?, description = ?, published = ? WHERE id = ?",
    [Bot.title, Bot.description, Bot.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Bot with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Bot: ", { id: id, ...Bot });
      result(null, { id: id, ...Bot });
    }
  );
};

Bot.remove = (id, result) => {
  sql.query("DELETE FROM Bot WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Bot with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted Bot with id: ", id);
    result(null, res);
  });
};

Bot.removeAll = result => {
  sql.query("DELETE FROM Bot", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} Bot`);
    result(null, res);
  });
};

module.exports = Bot;
