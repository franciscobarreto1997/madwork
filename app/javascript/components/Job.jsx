import React, { Component, useState } from 'react';
import axios from 'axios'


const Job = (props) => {

  const [toggled, setToggle] = useState(false)
  const [postedDate, setDate] = useState('')
  const [description, setDescription] = useState('')

  if (toggled) {
    axios.post('/search', {
          url: props.job.url
        }).then((data) => {
          console.log(data.data.posted_date)
          setDate(data.data.posted_date)
          console.log(data.data.description)
          setDescription(data.data.description)
        }).catch((data) => {
          console.log(data)
        })
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
      <p>{postedDate}</p>
      <p>{description}</p>
    </div>
  )
}

export default Job;
