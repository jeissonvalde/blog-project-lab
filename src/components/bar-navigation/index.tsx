import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Navigate } from 'react-router-dom';
import controllers from './controllers';
import "./bar-nav.css";

interface BarNav {
  routes: any[],
  redirect: null | string
};

class BarNavigation extends React.Component<{}, BarNav> {
  constructor(props: any) {
    super(props)

    this.state = {
      routes: props.routes,
      redirect: null,
    }
  }

  clickLink = controllers.navigateTo.bind(this)

  render() {
    let routes = this.state.routes

    if (this.state.redirect != null) {
      return <Navigate to={this.state.redirect} />;
    }

    return createPortal(
      <div className="bar-navigation">
        <ul>
          {routes.map((r: any, idx: number) => {
    
            return (
              <li
                key={idx}
                onClick={this.clickLink.bind(null, r)}>
                  
                <img src={r.icon.value} alt={r.icon.alt} /> 
                {r.label}
              </li>
            )
          })}
        </ul>
      </div>, document.getElementById('navigation-container') as HTMLElement)
  }
};

export default BarNavigation;