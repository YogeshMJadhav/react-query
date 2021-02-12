import React, { useState } from 'react'
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
    </div>
  );
}

export default App;