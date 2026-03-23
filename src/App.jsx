import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AppProvider } from './context/AppContext';
import NavBar from './components/layout/NavBar';
import Sidebar from './components/sidebar/SideBar';
// import Dashboard from './components/dashboard/Dashboard';


export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}

function AppLayout() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <div className="app-body">
        <Sidebar />
        <main className="main-content">
          {/* <Dashboard /> */}
        </main>
      </div>
    </div>
  );
}
