// DEPENDENCIES
const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "db");
const outputPath = path.join(OUTPUT_DIR, "db.json");

const notes = [];

function readData() {
  fs.readFile(outputPath, function (error, data) {

    if (error) {
      return console.log(error);
    }

    else {
      notes = JSON.parse(data);
    }
  });
};

function writeData() {
  fs.writeFile(outputPath, JSON.stringify(notes), function (error, data) {

    if (error) {
      return console.log(error);
    }

    else {
      console.log("File written!")
    }
  });
};


  app.get("/api/notes", function (req, res) {
    return res.json(notes);
  });



  //Create POST (call writefile) and DELETE API routes (counter increeasing, or uuid package to generate random ids, when deleting note, fetch id to delete it)

