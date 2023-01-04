import React from 'react'
import Sheet from './components/sheet'
import blogs from '../../assets/blogs'
import './styles/index.css'

declare global {
  interface Window {
    currentArticle: any
  }
}

class Publication extends React.Component {

  render() {

    return (
      <div className="Article page hide">
        <Sheet {...{}} />
      </div>
    )
  }
}

export default Publication