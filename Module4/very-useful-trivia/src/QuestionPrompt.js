import React, { useEffect, useState} from "react"
import ResultsButton from "./ResultsButton"

function QuestionPrompt(props){
const [index, setIndex] = useState(0)
const [playerPoints, setPlayerPoints] = useState(0)
const [question, setQuestion] = useState(null)
const [answers, setAnswers] = useState([])
const [length, setLength] = useState()
const [buttonIsOn, setButtonIsOn] = useState(true)
const [answerButton, setAnswerButton] = useState(true)





async function fetchUrl(){
    const response = await fetch("https://opentdb.com/api.php?amount=50&category=12&difficulty=medium&type=multiple")
    const data = await response.json() 
    setQuestion(data.results[index])
    if(index > length -1){
        setButtonIsOn(prevButton => !prevButton)
        alert("game over see results!")
        return buttonIsOn
    }
    setAnswers(shuffle([data.results[index].correct_answer, data.results[index].incorrect_answers[0],data.results[index].incorrect_answers[1],data.results[index].incorrect_answers[2] ]) )
    setLength(data.results.length)
    
}

useEffect(() => {
    fetchUrl()
    
},[index])

function changeQuestion(){
    
    setIndex(prevIndex => prevIndex + 1) 
    setAnswerButton(prevButton => !prevButton)
}


function shuffle(arr){
    var ctr = arr.length, temp, index

    while(ctr > 0){
        index = Math.floor(Math.random() * ctr)
        
        ctr--

        temp = arr[ctr]
        arr[ctr] = arr[index]
        arr[index] = temp
    }
    return arr
}
function handleAnswer(e){
    console.log(question.correct_answer)
    if(e.target.textContent === question.correct_answer){
        setPlayerPoints(prevPoints => prevPoints + 5)
        alert("correct!")
    }
    else{
        alert(`incorrect the answer is: ${question.correct_answer}`)
    }
    setAnswerButton(prevButton => !prevButton)
    

}
return(
    <div className = "question-page">
        <div><h1 className = "points"> Total Points: {playerPoints}</h1></div>
        <h1 className = "question-prompt">{index + 1}.{question && <div>{question.question}</div>}</h1>
        <h1>{answers && <button disabled = {!answerButton} onClick = {handleAnswer} >{answers[0]}</button>}</h1>
        <h1>{answers && <button disabled = {!answerButton} onClick = {handleAnswer} >{answers[1]}</button>}</h1>
        <h1>{answers && <button disabled = {!answerButton} onClick = {handleAnswer} >{answers[2]}</button>}</h1>
        <h1>{answers && <button disabled = {!answerButton} onClick = {handleAnswer} >{answers[3]}</button>}</h1>
        <button className = "next-question"onClick = {changeQuestion} disabled = {!buttonIsOn}>Next Question</button>
        <ResultsButton playerPoints = {playerPoints}/>
    </div>
)
}

export default QuestionPrompt