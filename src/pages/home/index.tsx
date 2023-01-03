// Dependencies
import React from 'react'
import blogs from '../../assets/blogs'
import setEvent from '../../shared/controllers/set-event.js'
import {
  BlogsInterval
} from './controllers/animations'
import {
  clickLiArticle
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
  render() {
    let blogsInterval = new BlogsInterval()
    globalEvents.setEventGlobal({ id: 'home-headline-list-event', handler: blogsInterval.presentation, noKillId: true })

    return (
      <section className="Home page">

        {/* Headlines */}
        <ul id="home-headline-list">
          {blogs.map((blg, idx) => {
            let liId = blg.id
            setTimeout(() => {
              let liArticleElem = document.getElementById(liId) as HTMLLIElement
              liArticleElem
                ? liArticleElem.onclick = clickLiArticle.bind(null, blg)
                : null
            }, 1000)

            return (
              <li
                key={idx}
                data-url={blg.url}
                data-blg-id={blg.id}
                id={liId}
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
            {blogs.map((blg, idx) => {
              let prevId = 'img-preview-' + blg.id
              setTimeout(() => {
                let prevImageElem = document.getElementById(prevId) as HTMLLIElement
                prevImageElem
                  ? prevImageElem.onclick = clickLiArticle.bind(null, blg)
                  : null
              }, 1000)

              return (
                <div
                  key={idx}
                  id={prevId}
                  className={`article-image ${idx == 0 ? 'bring-the-picture-here' : ''}`}>

                  <div className="article-image-effect"></div>
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