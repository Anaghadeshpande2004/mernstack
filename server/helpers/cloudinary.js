const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Replace these with your actual Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();

const upload = multer({ storage });

async function imageUploadUtil(file) {
  try {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      ).end(file.buffer);
    });

    return result;
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    throw err;
  }
}

module.exports = { upload, imageUploadUtil };
