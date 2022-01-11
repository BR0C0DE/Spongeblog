//Middleware
const router = require('express').Router()
const { Post, Note, User } = require('../models')
const passport = require('passport')

router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.find({}).populate('user')
  res.json(notes)
})

router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({ ...req.body, user: req.user._id })
  await Post.findByIdAndUpdate(req.body.postid, { $push: { note: note._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { notes: note._id } })
  res.json(note)
})

module.exports = router