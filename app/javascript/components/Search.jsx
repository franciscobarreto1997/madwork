import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount(){
    const input = document.querySelector('input')
    input.focus();
  }

  render(){
    return(
      <div>
        <form>
          <input autoComplete="off" type="text" name="title" placeholder="Ex: Ruby Developer" value={this.props.name}
             className="field"/>
        </form>
      </div>
    )
  }
}

export default Search;
