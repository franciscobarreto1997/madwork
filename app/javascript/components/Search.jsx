import React, { useEffect } from 'react';
import { useSpring, animated as a } from 'react-spring';


const Search = () => {

    useEffect(() => {
      const input = document.querySelector('input')
      input.focus();
    })

    const fadeIn = useSpring({opacity: 1, from: {opacity: 0}})

  return(
    <a.div>
      <form>
        <a.input style={fadeIn} autoComplete="off" type="text" name="title" placeholder="Ex: Ruby Developer"
           className="field"/>
      </form>
    </a.div>
  )
}

export default Search;
