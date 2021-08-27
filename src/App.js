import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const API_url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';

  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(API_url).then((result) => {
      console.log(result.data);
      setState(result.data);
    })
  }, []);


  return (
    <center>
      <div>
        {state && state.map(item =>
          <div className='container'>
            <div className='text'>Covid-19 Today </div>
            <div className='date'>{item.txn_date}</div>
            <div className='containerDetail'>
              <div className='todayCase'> Today case: {item.new_case} </div>
              <div className='totalCase'> Total case: {item.total_case} </div>
            </div>
            <div className='updateDate'> Update at : {item.update_date} </div>
          </div>
        )}
      </div>
    </center>
  );
}

export default App;
