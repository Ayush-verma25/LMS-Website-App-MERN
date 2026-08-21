import express from "express";
import {
  getUserData,
  purchaseCourse,
  userEnrolledCources,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/data", getUserData);
userRouter.get("/enrolled-courses", userEnrolledCources);
userRouter.post("/purchase", purchaseCourse);

export default userRouter;
