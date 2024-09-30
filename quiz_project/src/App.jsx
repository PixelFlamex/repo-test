import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [currentQuestions,setCurrentQuestions] = useState(["none","none","none"])
  const [statusMessage,setStatusMessage] = useState(currentQuestions[0])

  
  useEffect(() => {
    randomQuestion()
  },[])

  var questions = [["who is mario's brother ?","wario","christiano ronaldo","luigi","3"],
                   ["What is Wario Land 1's other name ?","Super Wario Bros","Super Mario Land 3","Mario Bros'nt","2"],
                   ["What does the M on Mario's Cap stand for ?","Mario","Mitsubishi Electric Air Conditioner","Macaroni","1"],
                   ["What's 9 + 10 ?","21","19","12410223509346937693406983746098374690837.92","1"]]

  function check(answerNumber) {
    if (answerNumber == currentQuestions[4]) {
      console.log("right")
      setCurrentQuestions(["right","right","right","right","right",])
      setStatusMessage("right answer")
      setTimeout(randomQuestion, 5000)
      

    } else {
      console.log("wrong")
      setCurrentQuestions(["wrong","wrong","wrong","wrong","wrong",])
      setStatusMessage("wrong answer")
      setTimeout(randomQuestion, 5000)
    }
  }

  function randomQuestion() {
    console.log("next question")
    const random = 
    setCurrentQuestions(questions[Math.floor(Math.random() * 4)])
    /*Math.random() * (max - min) + min */
    setStatusMessage(currentQuestions[0])
    console.log(currentQuestions)
    setStatusMessage(currentQuestions[0])
    
  }


  return (
    <>
      {currentQuestions == undefined ? <h1>Waiting...</h1> :<h1 className="question">{currentQuestions[0]}</h1>}
      {currentQuestions == undefined ? <div>Waiting...</div> : <div onClick={() => check(1)}>{currentQuestions[1]}</div>}
      {currentQuestions == undefined ? <div>Waiting...</div> : <div onClick={() => check(2)}>{currentQuestions[2]}</div>}
      {currentQuestions == undefined ? <div>Waiting...</div> : <div onClick={() => check(3)}>{currentQuestions[3]}</div>}
    </>
  )
}

export default App

/*-arrays with 5 strings,the question,the three answers,and which is the right one.
  -random one is chosen upon clicking play or winning
  -have a "rightAnswer" state that gets updated with the one in the array
  -each answer will have a value, 1, 2 or 3 (in the index) assigned to it, when selecting one, 
   check if its place in the index of the array matches the value of the right answer*/
  
