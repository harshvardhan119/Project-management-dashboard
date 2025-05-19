const Project = require("../models/Project");

exports.createProject = async (req, res) => {
    try {
        const project = await Project.create({
            ...req.body,
            createdBy: req.user.id
        });
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find({ createdBy: req.user.id });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProject = async (req, res) => {
    try {
        const project = await Project.findOne({ _id: req.params.id, createdBy: req.user.id });
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user.id },
            req.body,
            { new: true }
        );
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const result = await Project.findOneAndDelete({ _id: req.params.id, createdBy: req.user.id });
        res.json({ message: "Project deleted", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
