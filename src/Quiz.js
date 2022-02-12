import React, {Component} from "react";
import QuizQuestion from './QuizQuestion.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    render(){
        return <QuizQuestion>
            quiz_data.quiz_questions[state.quiz_position - 1]
                    {/* Quiz
                    <div className="QuizQuestion">
                        {quizData.quiz_questions[0].instruction_text}
                    </div> */}

                </QuizQuestion>
    }
    constructor(props){
        super(props)
        this.state = {quiz_position: 1}
    }
}

export default Quiz