const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController.js");


router.route('/').get(getGoals).post(setGoals);
// router.get("/", getGoals);
// router.post("/", setGoals);

router.route('/:id').put(updateGoal).delete(deleteGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id",deleteGoal);


module.exports = router;
