import React, { Component } from "react";

import '../assets/css/question.css'
class Question extends Component{
    constructor(props){
        super(props)
        this.state = {
            dapan : null

        }
        this.handelChange =this.handelChange.bind(this)
        this.handelSubmit =this.handelSubmit.bind(this)

    }

    handelChange(e){
        console.log(e.target.value)
        this.setState({
           dapan:e.target.value
        })

    }
    handelSubmit(){
        
        console.log(this.state.dapan)
        if(this.state.dapan == 0){
            alert('Chúc mừng! Bạn đã trả lời Đúng')
            this.props.Questions(10)
        }else if (this.state.dapan == 1){
            alert("Bạn đã trả lời sai")
            this.props.Questions(-10)
        }else {
            alert("bạn chưa chọn đáp an")
        }
        
        
    }
    render(){
       
        return(
           
                <div className = 'cont-ques'> 
                    <p className = 'question'> Question {this.props.indx+1}: {this.props.question}</p>

                    <div className = "ques-item">
                        <input type="radio"
                                id="answers"
                                name="answaer" 
                                value={0}
                                onChange ={this.handelChange}/>
                            a.{this.props.correct_answer}
                    </div>
                    <div className = "ques-item">
                    <input type="radio" id="answers" name="answaer" value={1}
                             onChange ={this.handelChange}
                            />
                            b.{this.props.incorrect_answers[0]}
                    </div>
                    
                    <div className = "ques-item"> 
                    <input type="radio" id="answers" name="answaer" value={1}
                            onChange ={this.handelChange}
                            />
                            c.{this.props.incorrect_answers[1]}
                    </div>
                    <div className = "ques-item">
                    <input type="radio" id="answers" name="answaer" value={1}
                            onChange ={this.handelChange}
                            />
                            d.{this.props.incorrect_answers[2]}
                    </div>               
                    <div className="ques-sub">
                        <button onClick ={this.handelSubmit}>Trả Lời</button>
                    </div>

                    
                  
                </div>

           
        )
    }
}


export default Question