import React from 'react'
import { createPortal } from 'react-dom'
import { ReactPropTypes } from 'react'
import controllers from './controllers'
import "./bar-nav.css"

interface BarNav {
  routes: any[]
}


class BarNavigation extends React.Component<{}, BarNav> {
  constructor(props: any) {
    super(props)

    this.state = {
      routes: props.routes
    }
  }


  render() {
    let routes = this.state.routes

    return createPortal(
      <div className="bar-navigation">
        <ul>
          {routes.map((r: any, idx: number) => {
    
            return (
              <li
                key={idx}
                onClick={controllers.clickLiNavigation.bind(null, r)}>
                  
                <img src={r.icon.value} alt={r.icon.alt} /> 
                {r.label}
              </li>
            )
          })}
        </ul>
      </div>, document.getElementById('navigation-container') as HTMLElement)
  }
}

export default BarNavigation