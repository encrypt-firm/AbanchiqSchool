const asyncHandler = require('express-async-handler')
const Goal = require('./../models/goalsModel')


const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals);
})


// Add Goals
const addGoal = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal);
})

// Update Goals
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('No Goal Found')
    }
    const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true})
    
    res.status(200).json(updated);
})

// Delete goals 

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(401)
        throw new Error('No Goal Found')
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
}
)

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};