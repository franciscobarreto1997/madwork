import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring';

import Search from './Search'
import JobList from './JobList'
import Logo from './Logo'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      tags: [],
      results: []
    }
  }

  render(){

    let searchOrJobList = this.state.tags.length >= 3 ? <JobList/> : <Search tags={this.state.tags}/>

    return(
      <div className="main-container">
      <Logo />
        {searchOrJobList}
      </div>
    )
  }
}

export default App;
