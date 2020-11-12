import React from 'react';
import './App.css'
import Add_and_Select from './Components/Add_and_Select';
import FilterData from './Components/FilterData';

export default function cV() {
  return (
    <div>
      <div className="app">
        <div className="app__box">
          <h2>As per the given requirements, first search box has to display data, so displaying data as below</h2>
          <FilterData />
        </div>
        <div className="app__box">

          <h2>As per the given requirements, second search box has to filter data, so filtering data as below</h2>
          <Add_and_Select />
        </div>
      </div>

    </div>
  )
}
