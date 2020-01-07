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
      percentage: 0
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      tags: [...this.state.tags, this.state.query],
      query: '',
      percentage: this.state.percentage + 33
    }, () => {
      if (this.state.tags.length == 3) {
        axios.post('http://localhost:3000/search', {
          role: this.state.tags[0],
          experience: this.state.tags[1],
          location: this.state.tags[2]
        }).then((data) => {
          console.log(data)
            this.setState({
              results: data
            })
        }).catch((data) => {
          console.log(data)
        })
      }
    })
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

    let searchOrLoader = (this.state.tags.length == 3 && this.state.results.length < 1) ?
        <Loader type="Puff"
                color="white"
                height={80}
                width={80}
                timeout={60000} />
                :
         <Search tags={this.state.tags}
                 handleSubmit={this.handleSubmit}
                 handleChange={this.handleChange}
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
