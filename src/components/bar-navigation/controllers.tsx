import React from 'react'
import ReactDOM from 'react-dom'

declare global {
  interface Window {
    currentArticle: any
  }
}

function clickLiNavigation (route: { Container: any }, e: any) {
  let rootElem = document.getElementById('root') as HTMLElement,
    AppElem = document.querySelector('.App') as  HTMLElement,
    childToRemove = AppElem.firstChild as  HTMLElement

  
}

export default {
  clickLiNavigation
}
