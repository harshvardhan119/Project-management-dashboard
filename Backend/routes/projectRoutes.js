const express = require("express");
const auth = require("../middleware/authMiddleware");
const {
    createProject,
    getProjects,
    getProject,
    updateProject,
    deleteProject
} = require("../controllers/projectController");

const router = express.Router();

router.use(auth);

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
