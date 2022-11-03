import { Component } from 'react';
import personalImg  from './Toof.jpg';
import Timer from "./Components/Timer";
class App extends Component{
  constructor(){
    super();
    this.state = {
      //number:1,
      show : true,
      Person : { 
                fullName : "Mezrigui Faycel",
                bio : "Licencié en informatique de gestion", 
                imgSrc: personalImg, 
                profession:"Student  in GOMYCODE"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }

  render(){
    if(this.state.show)
    return (
      <div className="Container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <br/>
        <img src={personalImg} alt="image peronel" className='imgf'/>
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      <button onClick={()=>this.setState({show:!this.state.show})}>Show Timer</button>
      {this.state.show && <Timer/>}

      </div>
      );
  }
}

export default App;
