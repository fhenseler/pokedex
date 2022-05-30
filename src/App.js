import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { useStateContext } from './ContextProvider';

import Pokemon from './services/Pokemon';
import Navbar from './components/Navbar';


const App = () => {
  const { setCurrentMode, currentMode, inputText } = useStateContext();


  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  });

  return (
        <div className={currentMode === 'Dark' ? true : false}>
          <Navbar /> 
          <div className="mt-10 grid grid-cols-5 gap-4">
          <Pokemon input={inputText} />
          </div>
      </div>
  );
};

export default App;