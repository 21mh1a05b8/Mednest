const express = require("express");
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const userRouter = express.Router();

userRouter.get("/getuser/:id", auth, userController.getuser);
userRouter.get("/getallusers", auth, userController.getallusers);
userRouter.post("/login", userController.login);
userRouter.post("/register", upload.single("profilepic"), (req, res) => {
  if (req.file) {
    req.file.path = req.file.path.replace(/\\/g, '/'); // Normalize the path
    console.log("Uploaded file path:", req.file.path);
  }
  userController.register(req, res);
});
userRouter.put("/updateprofile", auth, userController.updateprofile);
userRouter.delete("/deleteuser", auth, userController.deleteuser);

module.exports = userRouter;
