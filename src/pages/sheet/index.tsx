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

  componentDidMount(): void {
    this.setState({ article: window.Article })
  }

  render() {
    console.log(this.state);
    
    if (this.state.article == null) return ''

    return (
      <div className="Article page hide">
        <Sheet
          articleData={this.state.article}/>
      </div>
    )
  }
}

export default Publication