import asyncHandler from 'express-async-handler'
import Project from '../models/projectModel.js'

// @desc    Create Project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const { name, details, startDate, endDate, latitude, longitude } = req.body

  console.log(req.user)

  const project = await Project.create({
    createdBy: req.user._id,
    name,
    startDate,
    endDate,
    details,
    latitude,
    longitude
  })

  if (project) {
    res.json(project)
  } else {
    res.status(401)
    throw new Error('Invalid project data')
  }
})

// @desc    Get all projects
// @route   GET /api/projects
// @access  Private
const getAllProjects = asyncHandler(async (req, res) => {
  
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const projects = await Project.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  const count = await Project.countDocuments({})    
  res.json({ projects, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Get Project
// @route   GET /api/projects/:id
// @access  Private
const getProjectById = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id)

  if (project) {
    res.json(project)
  } else {
    res.status(404)
    throw new Error('Project not found')
  }
})

// @desc    Delete Project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
  const isProjectDeleted = await Project.deleteOne(
    { createdBy: req.user._id, _id: req.params.id },
    {
      useFindAndModify: false,
    }
  );

  if (isProjectDeleted) {
    res.json({
      message: "Project deleted successfully",
    });
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
})

// @desc    Update Project
// @route   PATCH /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
  
  const project = await Project.findOneAndUpdate(
    { createdBy: req.user._id, _id: req.params.id },
    req.body,
    {
      new: true,
      useFindAndModify: false,
    }
  );

  if (project) {
    res.json(project);
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
})

export {
  createProject,
  getProjectById,
  getAllProjects,
  deleteProject,
  updateProject
}
