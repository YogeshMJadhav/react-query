import React, { useState } from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import Navbar from './components/Navbar';
import People from './components/People';
import Planet from './components/Planet';
import './App.css'

function App() {
  const [page, setPage] = useState('planet')
  return (
    <div className="App">
      <p> React Query...</p>
      <Navbar setPage={setPage} />
        { page === 'planet' ? <Planet /> : <People /> }
        <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;