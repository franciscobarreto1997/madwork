import React, { Component } from 'react';

const Job = (props) => {
  return(
    <div className="job">
      <h2>{props.job.title}</h2>
      <h3>{props.job.company}</h3>
      <p>{props.job.posted_date}</p>
      <p>{props.job.description}</p>
    </div>
  )
}

export default Job;
