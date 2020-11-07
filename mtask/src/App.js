
import './App.css';

import DataFilter from './DataFilter';
import Data from './Data';


const libraries = [
  { name: 'Alabama' },
  { name: 'Alaska' },
  { name: 'Arizona' },
  { name: 'Arkansas' },
  { name: 'California' },
  { name: 'Colorado' },
  { name: 'Deleware' },
  { name: 'Florida' },
  { name: 'Georgia' },
  { name: 'Hawaii' },
  { name: 'Idaho' },
  { name: 'Illinois' },
  { name: 'Indiana' },
  { name: 'Iowa' },
  { name: 'Kansas' },
  { name: 'Kentucky' },
  { name: 'Louisiana' },
  { name: 'Maine' },
  { name: 'Maryland' },
  { name: 'Michigan' },
  { name: 'Missouri' },
];


function App() {
  return (
    <div className="app">
      <div className="app__box">
        <h2>As per the given requirements, first search box has to display data, so displaying data as below</h2>
        <Data items={libraries}></Data>
      </div>
      <div className="app__box">

        <h2>As per the given requirements, second search box has to filter data, so filtering data as below</h2>
        <DataFilter items={libraries}></DataFilter>
      </div>
    </div>
  );
}

export default App;
