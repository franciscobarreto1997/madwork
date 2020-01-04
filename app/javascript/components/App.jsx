import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';

import Search from './Search'
import JobList from './JobList'
import Logo from './Logo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      tags: [],
      results: [],
      searchCounter: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      searchCounter: this.state.searchCounter + 1,
      tags: [...this.state.tags, this.state.query],
      query: ''
    })
    if (this.state.counter == 3) {
      console.log("time to post our tags using axios!")
    }
  }

  handleChange = (e) => {
    let input = e.target.value
    if (input == "") {
      this.setState({
        query: ''
      })
    }
    this.setState({
      query: input
    })
  }

  render(){

    let searchOrJobList = this.state.tags.length == 3 ? <JobList/> : <Search tags={this.state.tags}
                                                                             handleSubmit={this.handleSubmit}
                                                                             handleChange={this.handleChange}
                                                                             counter={this.state.searchCounter}
                                                                             input={this.state.query}/>

    return(
      <div className="main-container">
      <Logo />
        {searchOrJobList}
      </div>
    )
  }
}

export default App;
