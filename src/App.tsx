import { useState } from 'react';
import routes from './routes';
import BarNavigation from './components/bar-navigation';
import { navigateTo } from './components/bar-navigation/controllers';
import './styles/App.css';

function App() {
  const [ currentPath, setCurrentPath ] = useState({ path: '/', req: {} })

  // Navigation
  let barNavData = {
    routes,
    setCurrentPath
  };

  const navigate = navigateTo.bind({ props: { setCurrentPath }})
  
  return (
    <div className="App">
      {routes.map((r: any, idx) => {

        if (r.path == currentPath.path) {
          return <r.Container navigate={navigate} currentPath={currentPath} key={idx} />;
        }
      })}

      <BarNavigation  {...barNavData} />
    </div>
  );
};

export default App;
