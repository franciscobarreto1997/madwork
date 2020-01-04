import React, { Component } from 'react';
import styled from 'styled-components';

class ProgressBar extends Component {

  render(){
    const Tracker = styled.div`
      width: 50%;
      height: 20px;
      margin: 15px auto;
      background: rgb(34,34,34);
      border-radius: 10px;
      box-shadow: inset 0 0 5px #000;
      position: absolute;
      bottom: 0;
    `;
    return(
      <Tracker>
      </Tracker>
    )
  }
}

export default ProgressBar;
