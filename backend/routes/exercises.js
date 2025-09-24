const express = require('express');
const router = express.Router();
let Exercise = require('../models/exercise.model');

router.get('/', (req, res) => {
    Exercise.find().then(exercises => res.json(exercises)).catch(err => res.status(400).json('Error' + err))
})

router.post('/add', (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = new Date(req.body.date)

    const newExercise = new Exercise({username, description, duration, date})

    newExercise.save().then(() => res.json('Exercise Added')).catch(err => res.status(400).json('Error' + err))
});

router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id).then(exercises => res.json(exercises)).catch(err => res.status(400).json('Error ' + err))
})

router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id).then(() => res.json('Exercise Deleted')).catch(err => res.status(400).json('Error ' + err))
})

router.post('/update/:id', (req, res) => {
    Exercise.findById(req.params.id).then(exercises => {
        exercises.username = req.body.username
        exercises.description = req.body.description
        exercises.duration = Number(req.body.duration)
        exercises.date = Date(req.body.date)

        exercises.save().then(exercises => res.json("Exercise updated")).catch(err => res.status(400).json('Error ' + err))
    }).catch(err => res.status(400).json('Error ' + err))
})

module.exports = router





 

module.exports = router


