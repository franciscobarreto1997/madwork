import React, { Component } from 'react';

import Job from './Job'

const JobList = (props) => {

  let jobs = []

  props.jobs.map(object => jobs = Object.values(object))

  return(
    <div className="job-list-container">
      {jobs.map((job, index) => {
        return <Job key={index} job={job} />
      })}
    </div>
  )
}

export default JobList;
