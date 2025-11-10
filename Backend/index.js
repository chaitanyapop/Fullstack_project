require("dotenv").config();
const express = require("express");
const workoutRouter = require("./router");

//creating express app here
const app = express();
const port = process.env.PORT || 3000;
//listening to the port
app.listen(port, () => {
  console.log("listening on port 4000");
});

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use("/api/workouts", workoutRouter);

//routes
// app.get("/", (req, res) => {
//   res.json({ message: "User made the get req" });
// });

/**
 * API'S to build
 * GET /workouts --> get all workouts
 * POST /workouts --> add new workout
 * GET /workouts/:id --> fetch specific workout
 * DELETE /workouts/:id --> delete specific workout
 * PATCH /workouts/:id --> update specific workout
 */
