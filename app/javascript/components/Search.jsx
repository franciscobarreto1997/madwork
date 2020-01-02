import React, { useEffect } from 'react';
import { useSpring, animated as a, config } from 'react-spring';


const Search = () => {

    useEffect(() => {
      const input = document.querySelector('input')
      input.focus();
    })

    const fadeIn = useSpring( {opacity: 1, color: 'red'} )

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
