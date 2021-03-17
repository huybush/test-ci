import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ListAnswer from "./components/ListAnswer";
import   Users from "./components/Users";





class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      diem:0,
      dapan:0,
      data : []
    }
    this.Questions =this.Questions.bind(this)
  }


  componentDidMount(){
    console.log("day la did mount")
    fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => {
      console.log(data.results)
      this.setState({
        data : data.results
      })
     
     
    })
  }
  Questions(answer){
    const diem = this.state.diem +answer
    console.log(diem)
  
    console.log('da submit',answer)
    this.setState({
      diem : diem
    })
   
    


  }

 

  
  render(){
    
    console.log(this.state)
    return (
      <div>


        <h1> Quiz app</h1>
        <Users dapan={this.state.diem}/>
        <ListAnswer  answer = {this.state.data} Questions ={this.Questions}/>
        
         
      </div>
  
  
    )
  }

  }


export default App;
