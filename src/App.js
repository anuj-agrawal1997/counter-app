import React , {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import Navbar from './components/navbar'

class App extends Component {
  state = {
    counters: [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]

}
handleReset(){
  const counters = this.state.counters.map(c =>{
    c.value=0;
    return c;
  })
  this.setState({counters})
}
 handleIncrement(counter){
    const counters = [...this.state.counters];
   // console.log(counters)
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    //console.log(counters[index])
    counters[index].value++;
    this.setState({counters})
}

handleDecrement(counter){
  const counters = [...this.state.counters];
 // console.log(counters)
  const index = counters.indexOf(counter);
  counters[index] = {...counter}
  //console.log(counters[index])
  counters[index].value--;
  this.setState({counters})
}

 handleDelete(counterId){
  const counters= this.state.counters.filter(c=> c.id !==counterId)
  this.setState({counters})
}
  render(){
    return (
      <React.Fragment>
        <header >
        <Navbar totalCounters = {this.state.counters.filter(c=> c.value > 0).length} />
        <main className="container"></main>
          <Counters 
            counters ={this.state.counters}
            onReset={tab=>this.handleReset(tab)} 
            onIncrement={tab=>this.handleIncrement(tab)}
            onDecrement={tab=>this.handleDecrement(tab)}
            onDelete={tab=>this.handleDelete(tab)}
            />
        </header>
        
      </React.Fragment>
    );
  }
}

export default App;
