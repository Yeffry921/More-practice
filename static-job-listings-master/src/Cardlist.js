import data from '../data.json'
import Card from './Card';
import React from 'react'

const Cardlist = () => {
  return (
    <React.Fragment>
      {data.map((job) => {
        return (
          <Card data={job} key={job.id}/>
        )
      })}
    </React.Fragment>
  )
};

export default Cardlist;
