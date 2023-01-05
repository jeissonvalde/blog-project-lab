import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  Route
} from './types';
import ReactDOM from 'react-dom';

// With Navigate and state
function clickLiNavigation (this: any, route: { Container: any, path: string }, e: any) {
  let rootElem = document.getElementById('root') as HTMLElement,
    AppElem = document.querySelector('.App') as  HTMLElement,
    childToRemove = AppElem.firstChild as  HTMLElement

  useEffect(() => {

    this.setState({ redirect: route.path })
  }, [])
}

// With useNavigation
function clickLiNavigation_2 (route: { Container: any, path: string }, e: any) {
  const navigation = useNavigate()

  navigation(route.path)
}

export function navigateTo (this: any, route: { Container: any, path: string }) {
  // Clear intervals
  for (let i = 0; i < 100; i++) { console.log(window.clearInterval(i)) }

  /**
   * Handle history
   * Handle replace location
   * Handle url params
   * Handle Get data
   * Handle make server queries
   */

  // Verifications
  if (route.path.substring(0,1) != '/' && route.path.substring(1,2) == '') {

    console.error(route)
    return alert('URL inválida')
  }
  if (location.pathname == route.path) return null


  let pathName = location.pathname.split('/'),
    pathRoute = route.path as string,
    pathRouteSplited = pathRoute.split('/')

  let routeAndParams = pathRouteSplited[1] ? pathRouteSplited[1].split('?') : [],
    paramList = routeAndParams[1] ? routeAndParams[1].split('&') : []

  // Page
  let currentPath = routeAndParams[0] ? routeAndParams[0] : pathRoute,
    params = {} as any

  if (pathRouteSplited[0] == '' && pathRouteSplited[1] == '') currentPath = route.path // Considerado como home
    
  
  // Params
  for (let idx = 0; idx < paramList.length; idx++) {
    const prm = paramList[idx].split('=') as string[]
    params[prm[0]] = prm[1]
  }

  this.props.setCurrentPath({ path: currentPath, req: { body: params } })
  history.replaceState({}, '', pathRoute)
}

export default {
  clickLiNavigation,
  clickLiNavigation_2,
  navigateTo
}
