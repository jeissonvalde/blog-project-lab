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

export function navigateTo (route: any) {
  // Clear intervals
  for (let i = 0; i < 100; i++) { console.log(window.clearInterval(i)) }
  
  /**
   * Handle history
   * Handle replace location
   * Handle url params
   * Handle Get data
   * Handle make server queries
   */

  let res = route.path + String(Math.random()).substring(4, 3)

  let pathName = location.pathname.split('/'),
    pathRoute = route.path
  if (pathName)

  history.replaceState({}, 'aa', res)
}

export default {
  clickLiNavigation,
  clickLiNavigation_2,
  navigateTo
}
