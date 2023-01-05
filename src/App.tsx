import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import BarNavigation from './components/bar-navigation';
import './styles/App.css';

function App() {

  // Navigation
  let barNavData = {
    routes
  }

  return (
    <div className="App">
      <Routes>
        {routes.map((r: any, idx) => {

          return <Route key={idx} {...r} element={<r.Container />} />;
        })}

      </Routes>
      <BarNavigation {...barNavData} />
    </div>
  )
}

export default App
