import React from 'react'
import Sheet from './components/sheet';
import {
  PublicationInterface
} from './article';
import {
  clickGoBack
} from './controllers/header';
import './styles/index.css';

class Publication extends React.Component<{}, PublicationInterface> {
  constructor(props: any) {
    super(props)

    this.state = {
      article: null,
      articleId: null,
      currentPath: props.currentPath
    }
  }

  componentDidMount(): void {
    // this.getArticleById(this.state.currentPath.req.body.id);
    this.setState({ article: window.Article });
    document.querySelector('.Article')?.classList.remove('hide')
  }

  // Handlers
  clickGoBack = clickGoBack.bind(this)
  getArticleById(id: string) {
    console.log('id', id)
    let Container = this;

    const response = fetch('weatherforecast')
      .then(res => {
        console.log()
      });

    console.log('weatherforecast', response)
  }

  render() {

    if (this.state.article == null) return ''
    
    return (
      <div className="Article page">
        <Sheet
          clickGoBack={this.clickGoBack}
          articleData={this.state.article}/>
      </div>
    )
  }
};

export default Publication;