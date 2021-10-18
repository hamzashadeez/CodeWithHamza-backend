//  Functions under questions
import { db } from "../config/firebase.js";
import admin from "firebase-admin";

export function postQuestion(req, res) {
  const body = req.body;
  const id = Math.random() * 1000000;
  const timestamp = admin.firestore.FieldValue.serverTimestamp();
  try {
    db.collection("questions")
      .doc(id.toString())
      .set({ ...body, timestamp, id: id.toString() })
      .then(() => {
        res.json({ requestBody: req.body });
      })
      .catch((e) => {
        res.send("Error");
      });
  } catch (error) {
    res.send(error.message);
  }
}

export const viewQuestion = async (req, res) => {
  const QuestionId = req.params.id;
  try {
    const questions = db.collection("questions").doc(QuestionId.toString());
    const doc = await questions.get();
    if (!doc.exists) {
      res.send("No such document!");
    } else {
        
          let allAnswers = [];
        db
        .collection("questions")
        .doc(QuestionId.toString())
        .collection("answers")
        // .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
            allAnswers.push(snapshot.docs.map((doc) => doc.data()))
        });
        console.log(allAnswers)
        res.send({...doc.data(), allAnswers});
      // now get answers
    //   const answerRef = db
    //     .collection("questions")
    //     .doc(QuestionId.toString())
    //     .collection("answers");
    //   const snapshot = await answerRef.get();
    //   console.log(snapshot.data)
    //   snapshot.forEach((answers) => {
    //     // allAnswers.push(answers.data());
    //     console.log(answers.data());
    //   });
    }
  } catch (error) {
    res.send(error.message);
  }
};

export function replayToQuestion(req, res) {
  //  answer to a question
  const QuestionId = req.params.id;
  const id = Math.random() * 1000000;
  const body = req.body;
  const timestamp = admin.firestore.FieldValue.serverTimestamp();

  try {
    db.collection("questions")
      .doc(QuestionId.toString())
      .collection("answers")
      .doc(id.toString())
      .set({
        ...body,
        timestamp,
        id: id.toString(),
      });
    res.send(`You just replay to a question ${id}`);
  } catch (error) {
    res.send(error.message);
  }
}

export function editQuestion(req, res) {
  res.send("Your Question is Editted");
}

export function deleteQuestion(req, res) {
  res.send("Your Question is Deleted");
}

export const showAllQuestion = async (req, res) => {
  try {
    const questionRef = db.collection("questions");
    const snapshot = await questionRef.orderBy("timestamp", "desc").get();
    const allQuestions = [];
    snapshot.forEach((doc) => {
      allQuestions.push(doc.data());
    });

    res.send(allQuestions);
  } catch (error) {
    res.send(error.message);
  }
};
