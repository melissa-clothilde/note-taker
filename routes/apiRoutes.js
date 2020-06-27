// DEPENDENCIES
const router = require("express").Router();

const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const OUTPUT_DIR = path.resolve(__dirname, "../db");
const outputPath = path.join(OUTPUT_DIR, "db.json");

const notes = [];
let id = 0;

function readData() {
  const data = fs.readFileSync(outputPath);
  return JSON.parse(data);
};

function writeData(req, res) {
  const newNote = req.body;
  newNote.id = id;
  id += 1;
  notes.push(newNote);
  fs.writeFileSync(outputPath, JSON.stringify(notes), function (error) {

    if (error) {
      throw error;
    }
  });
  console.log("File written!")
  return notes;
};

router.get("/notes", function (req, res) {
  res.json(readData());
});

router.post("/notes", function (req, res) {
  res.json(writeData(req, res));
});


router.delete("/notes/:id", function (req, res) {
  const notes = readData();
  const newNotes = notes.filter(note => note.id!==Number(req.params.id));
  console.log(newNotes, req.params.id);
  fs.writeFileSync(outputPath, JSON.stringify(newNotes), function (error) {

    if (error) {
      throw error;
    }
  });
  res.json(newNotes);
});



//Create DELETE API route (counter increeasing, or uuid package to generate random ids, when deleting note, fetch id to delete it)

module.exports = router;
