import React, { Component } from 'react'
import { useSpring, animated } from 'react-spring'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


import Search from './Search'
import JobList from './JobList'
import Logo from './Logo'
import ProgressBar from './ProgressBar'
import Intro from './Intro'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      query: '',
      tags: [],
      results: [],
      percentage: 0,
      dataFetched: false,
      introFinished: false
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
        axios.post('/search', {
          role: this.state.tags[0],
          experience: this.state.tags[1],
          location: this.state.tags[2]
        }).then((data) => {
          console.log(data)
            this.setState({
              results: [...this.state.results, data.data],
              dataFetched: true
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

  introFinished = (e) => {
    this.setState({
      introFinished: true
    })
  }

  render() {

    let displayedComponent = null

    let mainContainerStyle = this.state.dataFetched ? "main-container-results" : "main-container"

      if (this.state.tags.length == 3 && this.state.results.length < 1) {
        displayedComponent = <Loader type="Puff" color="black" height={80} width={80} timeout={120000} />
      } else if (this.state.dataFetched == true) {
        displayedComponent = <JobList jobs={this.state.results}/>
      } else {
        displayedComponent = <Search tags={this.state.tags} handleSubmit={this.handleSubmit} handleChange={this.handleChange} input={this.state.query} />
      }

      let progressBarOrNot = this.state.tags.length == 3 ?
        null
          :
        <ProgressBar percentage={this.state.percentage} />

    if (this.state.introFinished) {
      return(
        <div className={mainContainerStyle}>
            <Intro handleChange={this.introFinished}/>
          <div className="text">
            <h1>Welcome to MADWORK</h1>
            <p>Tired of searching 50 different jobs websites?<br/> Search on <strong>MADWORK</strong> and we search all the others for you.</p>
          </div>
          <div className="field-progress-bar">
            {displayedComponent}
            {progressBarOrNot}
          </div>
        </div>
        )
    } else {
      return (
          <div className={mainContainerStyle}>
            <Intro handleChange={this.introFinished}/>
          </div>
      )
    }
  }
}

export default App;
