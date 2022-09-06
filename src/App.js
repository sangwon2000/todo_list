import React, { useState } from 'react';
import InputArea from './InputArea';
import './App.css';
import Lists from './Lists';

function App() {
  const [data ,setData] = useState([]);
  return(
    <div className='todo'>
      <h1 className='title'>TO DO LIST</h1>
      <InputArea setData={setData}/>
      <Lists data={data} setData={setData} />
    </div>

  )

}

export default App;
