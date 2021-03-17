import React, { Component } from "react";

import  "../assets/css/user.css";

class Users extends Component {
    constructor(props) {
        super(props)


    }


    render() {
        console.log(this.props)

        return (
            
            <div className ="diem">
                <h4> Score</h4>
                <div className="score">
                {
                    this.props.dapan
                }

                </div>
                

            </div>


        )
    }
}


export default Users