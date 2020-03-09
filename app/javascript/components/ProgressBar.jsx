import React, { Component } from 'react';
import styled from 'styled-components';

class ProgressBar extends Component {

  render(){
    const Tracker = styled.div`
      height: 20px;
      margin: 15px auto;
      background: transparent;
      border: 1px solid black;
      position: relative;
    `;

    let percentageWidth = this.props.percentage + "%"

    const ProgressInTracker = styled.div`
      height: 100%;
      width: ${percentageWidth} ;
      background: black;
      box-shadow: inset 0 0 5px #000;
      transition: all 0.5s ease;
    `;
    return(
      <Tracker>
        <ProgressInTracker percentage={this.props.percentage} />
      </Tracker>
    )
  }
}

export default ProgressBar;
