import React from 'react'
import ReactDOM from 'react-dom'


function clickLiNavigation (route: { Container: any }, e: any) {
  let rootElem = document.getElementById('root') as HTMLElement


  return ReactDOM.hydrate(<route.Container<HTMLElement> />, rootElem)
}

export default {
  clickLiNavigation
}
