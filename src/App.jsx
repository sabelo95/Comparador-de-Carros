import React from 'react';
import data from './data.json'; 
import { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import CarrosListContainer from './components/carrosListContainer/carrosListContainer';
import CarroDetail from './components/carroDetail/carroDetail';
import { ComparatorProvider } from './context/ComparatorContext';
import Comparator from './components/comparator/comparator';

function App() {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (value) => {
    setFilterValue(value);
  };

  return (
    <>
      <BrowserRouter>
      <ComparatorProvider>
      <Navbar  onFilterChange={handleFilterChange} filterValue={filterValue} />
      <Routes>
      <Route path='/' element={<CarrosListContainer data={data} filterValue={filterValue} />}/>
      <Route path='/carroDetail/:modelo' element={<CarroDetail data={data}/>}/>
      <Route path='/Comparator' element={<Comparator/>}/>
      
      </Routes>
      </ComparatorProvider>
      </BrowserRouter>
      
    </>
  );
}

export default App;


