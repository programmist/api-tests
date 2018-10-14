import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Quote from "./Quote";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      count: 10,
    }

    this.getQuotes();
  }

  getQuotes = async (event, count = this.state.count) => {
    const {data: quotes} = await Axios.get(
      `http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`
    );
    this.setState({quotes})
  }

  updateCount = (event) => {
    this.setState({count: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <input
          type="number"
          value={this.state.count}
          onChange={this.updateCount}
        />

        <button onClick={this.getQuotes}>
          More Quotes
        </button>
        
        <ul id="quote-list">
          {
            this.state.quotes.map((quote) => (
              <Quote key={quote} quote={quote} />
            ))
          }
        </ul>

        
      </div>
    );
  }
}
