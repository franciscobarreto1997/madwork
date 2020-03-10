import React, {useState, useEffect} from 'react'

const Intro = (props) => {

  const [buttonAnimated, setButtonAnimated] = useState(false)
  const [divAnimated, setDivAnimated] = useState(false)

  const button = document.querySelector('button')
  const div = document.querySelector('.intro')

  if (buttonAnimated === true) {
    if (button !== null) {
      setTimeout(() => {
        button.parentNode.removeChild(button);
        setDivAnimated(true)
      }, 1000);
    }

    if (div !== null) {
      setTimeout(() => {
        div.parentNode.removeChild(div);
        props.handleChange()
      }, 2200);
    }
  }

  return (
    <div className={ divAnimated ? "intro div-animation" : "intro" }>
      <h1>MADWORK</h1>
      <button className={buttonAnimated ? "button btn-animation" : "button"} onClick={() => setButtonAnimated(true) }>MADWORK</button>
    </div>
  )
}

export default Intro
