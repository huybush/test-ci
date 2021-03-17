import  React, { Component } from "react";
import Question from "./Question";


class ListAnswer extends Component { 
    constructor(props){
        super(props)
    }
    
    render(){
     
        console.log(this.props)
        return(
        
            <div>
                { this.props.answer.map( (doc,indx)=>{
                    return (
                        <Question {...doc} key ={indx} indx={indx}  Questions ={this.props.Questions}/>
                        
                    )
                })

                }

               
                
            </div>
        )
    }
}

export default ListAnswer