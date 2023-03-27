const asyncHandler = require('express-async-handler')
const Goal = require('./../models/goalsModel')
const User = require('../models/userModel')





// get user goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    res.status(200).json(goals);
})


// Add/Create Goals
const addGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal);
})

// Update Goals
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('No Goal Found')
    }
    const user = await User.findById(req.user.id)

    // check user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the goals he only have before updating
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    } else {
        res.status(401)
        throw new Error('User not authorized')
    }


    const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updated);
})

// Delete goals 

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(401)
        throw new Error('No Goal Found')
    }
    const user = await User.findById(req.user.id)

    // check user
    if (!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the goals he only have before deleting
    if (goal.user.toString() !== user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()
    res.status(200).json({ id: req.params.id, text: "deleted" })
}
)

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};