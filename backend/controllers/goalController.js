const asyncHandler=require('express-async-handler');

const Goal = require('../model/goalModel.js')


//@desc Get goals
//@route  GET/api/goals
//@access private
const getGoals = asyncHandler(async(req, res) => {
  const goals=await Goal.find()
  res.status(200).send(goals);
});

//@desc Set goals
//@route  POST/api/goals
//@access private
const setGoals = asyncHandler(async(req, res) => {
  if(!req.body.text)
  {
    // res.status(400).send({ message: "please add a text field" })
    res.status(400)
    throw new Error('please add a text field')
  }
  const goal=await Goal.create({
    text : req.body.text
  })
  res.status(200).send(goal);
});

//@desc update goals
//@route  PUT/api/goals/:id
//@access private
const updateGoal = asyncHandler(async(req, res) => {

 const goal=await Goal.findById(req.params.id)
 if(!goal){
    res.status(400)
    throw new Error('Goal not found')
 }
  const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,
    {new:true})
  res.status(200).send(updatedGoal);
});

//@desc delete goals
//@route  DELETE/api/goals/:id
//@access private
const deleteGoal = asyncHandler(async(req, res) => {
    const goal=await Goal.findById(req.params.id)
    if(!goal){
       res.status(400)
       throw new Error('Goal not found')
    }
    await goal.deleteOne()
  res.status(200).send({ id: req.params.id});
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
