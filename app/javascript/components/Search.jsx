import React, { useEffect } from 'react';

const Search = (props) => {

  useEffect(() => {
    const input = document.querySelector('input')
    input.focus();
  })

  if (props.tags.length === 3) {
    console.log("tem calma sou a sofia!")
  }

  let placeholder = ""

  if (props.tags.length == 0) {
    placeholder = "Type in your language/framework of choice"
  } else if (props.tags.length == 1) {
    placeholder = "Junior? Mid-Level? Senior?"
  } else {
    placeholder = "Where do you want to work?"
  }

  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input autoComplete="off" type="text" name="query" placeholder={placeholder}
           className="field" onChange={props.handleChange} value={props.input}/>
      </form>
    </div>
  )
}

export default Search;
