import React from 'react';
import ADDITION from './constants';
import './App.css';

interface Props {
  store: any;
}

class App extends React.Component<Props, {}> {  
  
  constructor(props: any){
    super(props)
   this.addition = this.addition.bind(this)
  } 
  
  addition = function(this: any, e?: any){     
    const {_a, _b} = this.refs
    e.preventDefault()  
    
    this.props.store.dispatch({
      type: ADDITION,
      a: +_a.value, 
      b: +_b.value
    })    
  }

  render() {    
    let {result} = this.props.store.getState()   

       return(
        <div className="App">
        <form onSubmit={this.addition}>
          <input ref='_a' />
          <input ref='_b' />
          <button type='submit'>Сложить</button>
        </form>
        <p>{result}</p>
      </div>
       )
  }
}
  

export default App;
