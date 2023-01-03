import React from 'react'
// import Sheet from './components/sheet'
import blogs from '../../assets/blogs'
import setEvent from '../../shared/controllers/set-event.js'
import {
  BlogsInterval
} from './controllers/animations'
import {
  clickLiArticle
} from './controllers/events'
import './styles/index.css'

// Global props
const globalEvents = new setEvent.GlobalEvent()

class Home extends React.Component {
  render() {
    let blogsInterval = new BlogsInterval()
    globalEvents.setEventGlobal({ id: 'home-headline-list-event', handler: blogsInterval.presentation, noKillId: true })

    return (
      <section className="Home page">

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
                id={liId}
                className={blg.className}>

                {blg.title}
              </li>
            )
          })}

          <li className="marker">l</li>
        </ul>

        <div className="pub-preview">
          {blogs.map((blg, idx) => {
            let liId = blg.id
            setTimeout(() => {
              let liArticleElem = document.getElementById(liId) as HTMLLIElement
              liArticleElem
                ? liArticleElem.onclick = clickLiArticle.bind(null, blg)
                : null
            }, 1000)

            return (
              <div key={idx} className={`article-image bring-the-picture-here ${idx == 0 ? 'pointer' : ''}`}>
                <div className="article-image-effect"></div>
                <img src={blg.bgImage} />
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Home