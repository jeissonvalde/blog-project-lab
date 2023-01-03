import React from 'react'
import Sheet from './components/sheet'
import blogs from '../../assets/blogs'
import './styles/index.css'

class Publication extends React.Component {


  render() {

    return (
      <div className="Sheet page">

        {blogs.map((blg, idx) => {

          return (
            <Sheet {...blg} key={idx} />
          )
        })}
      </div>
    )
  }
}

export default Publication