import React, {useState} from 'react'

const Intro = () => {


  const [buttonAnimated, setButtonAnimated] = useState(false)
  const [divAnimated, setDivAnimated] = useState(false)

  const button = document.querySelector('button')
  const div = document.querySelector('.intro')


  if (button) {
    if (buttonAnimated === true) {
      setTimeout(() => {
        button.parentNode.removeChild(button);
        setDivAnimated(true)
      }, 1000);

      setTimeout(() => {
        div.parentNode.removeChild(div);
      }, 2200);
    }
  }


  return(
    <div className={ divAnimated ? "intro div-animation" : "intro" }>
      <h1>MADWORK</h1>
      <button className={buttonAnimated ? "button btn-animation" : "button"} onClick={() => setButtonAnimated(true) }>MADWORK</button>
    </div>
  )
}

export default Intro
