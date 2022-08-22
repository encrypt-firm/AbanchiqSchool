const asyncHandler = require('express-async-handler')


const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
            goals :[
                {
                    // Array of objects
                    id: 1,
                    name: 'Learn',
                    description: 'Get/read Goals',
                    completed: true
                }
            ]
    });
})

const addGoal = asyncHandler(async (req, res) =>{
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }

    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: 'Create goal',
                completed: true
            }
        ]
    });
})

const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: `Update goal ${req.params.id}`,
                completed: true
            }
        ] 
    });
})

const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        goals: [
            {   // an array of objects  
                id: 1,
                name: 'Learn React',
                description: `Delete goal ${req.params.id}`,
                completed: true
            }
        ] 
    });
}
)

module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};