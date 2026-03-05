const songModel = require("../models/song.model.js");
const id3 = require("node-id3");
const { uploadToImageKit } = require("../services/storage.service.js");

async function uploadSong(req, res) {
  const tags = await id3.read(req.file.buffer);
  const { mood } = req.body;

  const [songFile, posterFile] = await Promise.all([
    uploadToImageKit({
      buffer: req.file.buffer,
      filename: req.file.originalname,
      folder: "/Mood-Sync/songs/",
    }),
    uploadToImageKit({
      buffer: tags.image.imageBuffer,
      filename: `poster_${req.file.originalname}`,
      folder: "/Mood-Sync/posters/",
    }),
  ]);

  const newSong = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood: mood,
  });

  await newSong.save();

  res.status(201).json({
    message: "Song uploaded successfully",
    newSong,
  });
}

async function getSongs(req, res) {
  const { mood } = req.query;
  const songs = await songModel.find(mood ? { mood } : {});
  res.status(200).json({
    message: "Songs retrieved successfully",
    songs,
  });
}

module.exports = {
  uploadSong,
  getSongs,
};
