import React, { Component, useState } from 'react';

const Job = (props) => {

  const [toggled, setToggle] = useState(false)

  if (toggled) {

  }

  return(
    <div className={ toggled ? "job active" : "job" } onClick={() => setToggle(!toggled)}>
      <h2>{props.job.title}</h2>
      <h3>{props.job.company}</h3>
      <p>{props.job.location}</p>
      <p>{props.job.summary}</p>
      <a href={props.job.url}>
        <button id="go">
          GO
        </button>
      </a>
    </div>
  )
}

export default Job;
