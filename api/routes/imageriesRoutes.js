const router = require('express').Router()
const parser = require('../cloudinaryConfig')

// Initialize Controller
const imageriesController = require('../controllers/imageriesController')

// Get All
router.get('/homepage', imageriesController.list)

// Get One
// router.get('/users/imageries/:id', imageriesController.find)

// Get One
router.get('/users/imageries/:id', imageriesController.findImagery)

// Get User Imageries
router.get('/users/:id', imageriesController.getUserImageries)

// Get User Likes
router.post('/homepage', imageriesController.findUserLikes)

// Create
// Add cloudinary parser as middleware
router.post(
  '/users/imageries/create',
  parser.single('image'),
  imageriesController.create
)

// Update
router.put('/users/imageries/edit/:id', imageriesController.update)

// Update Likes
router.post('/users/imageries/edit', imageriesController.updateLikes)

// Count Likes
router.post('/users/imageries/count', imageriesController.updateCount)

// Delete
router.post('/users/imageries/delete', imageriesController.delete)

module.exports = router
