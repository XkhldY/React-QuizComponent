import { Component } from "react";
import React from "react";
import QuizQuestionButton from "./QuizQuestionButton";


class QuizQuestion extends Component{
    render(){
        return (
                <main>
                    <section>
                        <p>
                            {this.props.quiz_question.instruction_text}
                        </p>
                        </section>
                    <section className="buttons">
                        <ul>
                            <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]} />
                            {/* <li>{this.props.quiz_question.answer_options[0]}</li> */}
                            
                        </ul>
                    </section>
                </main>
        )}
        
}


export default QuizQuestion