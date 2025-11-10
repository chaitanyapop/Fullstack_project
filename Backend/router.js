const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ msg: "executing getall workouts request" });
});

router.post("/", (req, res) => {
  res.json({ msg: "executing post request for adding the workouts" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "executing get req to get specific workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "deleting specific workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "updating particular workout" });
});

module.exports = router;
/**
 * API'S to build
 * GET /workouts --> get all workouts
 * POST /workouts --> add new workout
 * GET /workouts/:id --> fetch specific workout
 * DELETE /workouts/:id --> delete specific workout
 * PATCH /workouts/:id --> update specific workout
 */
