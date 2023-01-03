import { useState } from 'react'
import routes from './routes'
import BarNavigation from './components/bar-navigation'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  // Navigation
  let barNavData = {
    routes
  }


  return (
    <div className="App">
      {routes.map((r, idx) => {

        return (
          <r.Container key={idx} />
        )
      })}

      <BarNavigation {...barNavData} />
    </div>
  )
}

export default App
