const imagekit = require("@imagekit/nodejs");

const client = new imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function uploadToImageKit({buffer, filename, folder="songs/"}) {
    const file = await client.files.upload({
        file: await  imagekit.toFile(Buffer.from(buffer)),
        fileName: filename,
        folder: folder
    })
    return file;
}

module.exports = { uploadToImageKit };