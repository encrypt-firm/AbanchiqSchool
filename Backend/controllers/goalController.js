const getGoals = (req, res) => {
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
}

const addGoal = (req, res) =>{
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
}

const updateGoal = (req, res) => {
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
}

const deleteGoal = (req, res) => {
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


module.exports = {
    getGoals,
    addGoal,
    updateGoal,
    deleteGoal
};