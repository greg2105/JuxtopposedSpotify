import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';'./components/Sidebar';
import SongPlayer from './components/SongPlayer';'./components/SongPlayer';
import MainMenu from './components/MainMenu';'./components/MainMenu';
import Nav from './components/Nav';

function App() {
  return (
      <div className="main-container">
        <Nav />
        <MainMenu />
        <Sidebar />
        <SongPlayer />
      </div>
  )
}

export default App
