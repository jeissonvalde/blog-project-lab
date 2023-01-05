import React from 'react'
import Sheet from './components/sheet'
import {
  PublicationInterface
} from './article'
import './styles/index.css'

class Publication extends React.Component<{}, PublicationInterface> {
  constructor(props: any) {
    super(props)

    this.state = {
      article: null,
      articleId: null,
    }
  }

  render() {
    
    console.log('Article (sheet) before or state null')

    if (this.state.article == null) return <div>Article</div>

    console.log('Article (sheet)')
    return (
      <div className="Article page hide">
        <Sheet
          articleData={this.state.article}/>
      </div>
    )
  }
}

export default Publication