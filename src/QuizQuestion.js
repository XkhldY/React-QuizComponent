import { Component } from "react";
import React from "react";

class QuizQuestion extends Component{
    render(){
        return 
                <main>
                    <section>
                        <p>// instruction text goes here
                            this.props.instruction_text
                        </p>
                        </section>
                    <section className="buttons">
                        <ul>
                            //quiz question button logic goes here
                            this.props.quiz_question.answer_options[0]
                        </ul>
                    </section>
                </main>
    }
        
}


export default QuizQuestion