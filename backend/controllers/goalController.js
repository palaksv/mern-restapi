//@desc Get goals
//@route  GET/api/goals
//@access private
const getGoals = (req, res) => {
  res.status(200).send({ message: "get goals" });
};

//@desc Set goals
//@route  POST/api/goals
//@access private
const setGoals = (req, res) => {
  if(!req.body.text)
  {
    // res.status(400).send({ message: "please add a text field" })
    res.status(400)
    throw new Error('please add a text field')
  }
  res.status(200).send({ message: "set goals" });
};

//@desc update goals
//@route  PUT/api/goals/:id
//@access private
const updateGoal = (req, res) => {
  res.status(200).send({ message: `update goal ${req.params.id}` });
};

//@desc delete goals
//@route  DELETE/api/goals/:id
//@access private
const deleteGoal = (req, res) => {
  res.status(200).send({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
