import express from "express";

import { HomeworkController } from "./dependencies";
import { userRolCheck } from "../../helpers/checks/homeworkCheck";
export const homeWorkRoute = express.Router();

homeWorkRoute.post("/member/createActivity/",userRolCheck, HomeworkController.createHomework.bind(HomeworkController));
homeWorkRoute.post("/member/activities/", userRolCheck, HomeworkController.getListHomeWorks.bind(HomeworkController));
homeWorkRoute.put("/member/updateActivity/", userRolCheck, HomeworkController.updateHomeWok.bind(HomeworkController));
homeWorkRoute.delete("/member/deleteActivity/",userRolCheck,HomeworkController.deleteHomeWork.bind(HomeworkController));