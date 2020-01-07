import React, { useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';


const Search = (props) => {

    useEffect(() => {
      const input = document.querySelector('input')
      input.focus();
    })

    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}})

    let placeholder = ""

    if (props.tags.length == 0) {
      placeholder = "Type in your language/framework of choice"
    } else if (props.tags.length == 1) {
      placeholder = "Junior? Mid-Level? Senior?"
    } else {
      placeholder = "Where do you want to work?"
    }


  return(
    <a.div>
      <form onSubmit={props.handleSubmit}>
        <a.input style={fadeIn} autoComplete="off" type="text" name="query" placeholder={placeholder}
           className="field" onChange={props.handleChange} value={props.input}/>
      </form>
    </a.div>
  )
}

export default Search;
