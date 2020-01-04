import React, { useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';


const Search = (props) => {

    useEffect(() => {
      const input = document.querySelector('input')
      input.focus();
    })

    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}})

    let placeholder = ""

    if (props.counter == 0) {
      placeholder = "What do you do?"
    } else if (props.counter == 1) {
      placeholder = "Junior? Midlevel? Senior?"
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
