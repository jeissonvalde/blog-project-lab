// Dependencies
import React from 'react'
import { PreviewIntro } from './components/preview-intro'
import blogs from '../../assets/blogs'
import setEvent from '../../shared/controllers/set-event.js'
import {
  presentation,
  stopPresentation,
  selectLi,
} from './controllers/animations'
import {
  clickLiArticle,
  clickArticlePreview
} from './controllers/events'
import {
  loadImage
} from './controllers/image'
import './styles/index.css'

// Global props
const globalEvents = new setEvent.GlobalEvent()
let imgLinkBlank = 'https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Ficons%2Ficons8-external-link-96.png?alt=media&token=d97b571c-72b1-4a0c-989f-7802f810b879'

// Page container
class Home extends React.Component {
  constructor(props: any) {
    super(props)

    this.state = {
      handleRemoveInterval: null,
      articlePointer: null,
      mainInterval: null
    }
  }

  // Handlers
  initPresentation = presentation.bind(this)
  stopPresentation = stopPresentation.bind(this)
  selectLi = selectLi.bind(this)
  selectPreview = selectLi.bind(this)
  // articleIntroElem = articleIntroElem.bind(this)

  render() {
    globalEvents.setEventGlobal({ id: 'home-headline-list-event', handler: this.initPresentation, noKillId: true })

    return (
      <section className="Home page">

        {/* Headlines */}
        <ul id="home-headline-list">
          {blogs.map((blg, idx) => {
            let liId = blg.id

            return (
              <li
                key={idx}
                data-url={blg.url}
                data-blg-id={blg.id}
                id={liId}
                onClick={this.selectLi.bind(null, liId)}
                className={blg.className}>

                {blg.title}
              </li>
            )
          })}

          <li className="marker">l</li>
        </ul>

        {/* Articles preview */}
        <div className="pub-preview">
          <div className="pub-preview-images">
            {blogs.map((blg: any, idx: number) => {
              let prevId = 'img-preview-' + blg.id

              return (
                <div
                  key={idx}
                  id={prevId}
                  onClick={this.selectPreview.bind(null, blg)}
                  className={`article-image ${idx == 0 ? 'bring-the-picture-here' : ''}`}>

                  <div className="article-image-effect">
                    <PreviewIntro blg={blg} />
                  </div>

                  <a className="author external-link" target="_blank" href={blg.bgImageAuthor}>Autor <img src={imgLinkBlank} /></a>
                  <img
                    onLoad={loadImage.bind(null, prevId)}
                    src={blg.bgImage}
                    alt={blg.alt} />
                </div>
              )
            })}

          </div>
        </div>
      </section>
    )
  }
}

export default Home