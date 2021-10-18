import  Express  from "express";
import {postQuestion, viewQuestion, editQuestion, replayToQuestion, deleteQuestion, showAllQuestion} from '../controllers/QuestionController.js'

//  Question Router
const QuestionRoute = Express.Router();


QuestionRoute.get("/", (req, res)=> showAllQuestion(req, res));


QuestionRoute.post("/", (req, res)=> postQuestion(req, res));


QuestionRoute.get("/view/:id", (req, res)=> viewQuestion(req, res));


QuestionRoute.post("/replay/:id", (req, res)=> replayToQuestion(req, res));


QuestionRoute.post("/edit:id", (req, res)=> editQuestion(req, res));


QuestionRoute.delete("/:id", (req, res)=> deleteQuestion(req, res));

export {
    QuestionRoute
}
