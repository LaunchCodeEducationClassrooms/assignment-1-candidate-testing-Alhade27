const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer;
let candidateAnswer="";
let questions=["Who was the first American woman in space? ","True or false: 5000 meters = 5 kilometers. ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride",	"True",	"40","Trajectory","3"];
let candidateAnswers=[];

question="\nWho was the first American woman in space? ";
correctAnswer="Sally Ride";
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName=input.question("What's your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(i=0;i<questions.length;i++)
  {
    candidateAnswers[i]=input.question("\n"+questions[i]).trim();
    console.log("Your answer: "+candidateAnswers[i]);
    console.log("Correct answer: "+correctAnswers[i]);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade=0;
  let questionsMissed=[];
  let numberMissed=0;
  let pass;
  for(i=0;i<questions.length;i++)
    {
    if (candidateAnswers[i].toLowerCase()==correctAnswers[i].toLowerCase())
      {
        grade+=1;
      }
      else
      {
        questionsMissed.push(i+1);
        numberMissed+=1;
      }
    }
  grade=(grade/questions.length)*100
  if(grade>=80)
    {pass="Passed"}else{pass="Failed"}

  return console.log(`\n >>> Overall Grade: ${grade}% got ${questions.length-numberMissed} outta ${questions.length} <<<\n >>> You missed questions ${questionsMissed} <<<\n >>> Status: ${pass} <<<`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("It's nice to meet you "+candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
runProgram();
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};