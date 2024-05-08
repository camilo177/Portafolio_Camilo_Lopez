import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './app/components/header';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-app-white font-roboto'>
      <section className='flex-1 grid grid-rows-[auto_1fr_auto]'>
        <Header /> 
      </section>
    </main>
  );
}

export default App;
