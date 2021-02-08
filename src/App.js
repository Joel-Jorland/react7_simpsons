import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      quote: ""
    }
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote(){
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then(response => response.data)
    .then(data =>{
      console.log(data)
      this.setState({
        quote: data[0]
      })
    })
  }

  render(){
    return (
      <div className="App">
        <QuoteCard quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
