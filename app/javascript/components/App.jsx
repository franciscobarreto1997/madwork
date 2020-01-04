import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import Search from './Search'
import JobList from './JobList'
import Logo from './Logo'
import ProgressBar from './ProgressBar'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      tags: [],
      results: [],
      searchCounter: 0,
      percentage: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      searchCounter: this.state.searchCounter + 1,
      tags: [...this.state.tags, this.state.query],
      query: '',
      percentage: this.state.percentage + 33
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

    let searchOrLoader = this.state.tags.length == 3 ?
        <Loader type="Puff"
                color="white"
                height={80}
                width={80}
                timeout={10000} />
                :
         <Search tags={this.state.tags}
                 handleSubmit={this.handleSubmit}
                 handleChange={this.handleChange}
                 counter={this.state.searchCounter}
                 input={this.state.query}/>

      let progressBarOrNot = this.state.tags.length == 3 ?
        null
          :
        <ProgressBar percentage={this.state.percentage} />

    return(
      <div className="main-container">
      <Logo />
        {searchOrLoader}
        {progressBarOrNot}
      </div>
    )
  }
}

export default App;
