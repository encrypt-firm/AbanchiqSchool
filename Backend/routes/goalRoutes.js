const express = require('express');
const router = express.Router();
const {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
} = require('./../controllers/goalController');

const {protect} = require('../middleware/authMiddleware')

    router.get('/', protect ,getGoals);
    router.post('/', protect, addGoal);
    router.put('/:id', protect,updateGoal);
    router.delete('/:id', protect ,deleteGoal);
    
module.exports = router