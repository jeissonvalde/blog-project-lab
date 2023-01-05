import React from 'react'
import SheetBackground from './background'
import images from '../../../assets/images.json'
import SheetPeople from './people'
import handles from '../controllers/content'
import {
  ArticleInterface
} from '../article'

function BlogContent (props: { articleData: ArticleInterface }) {
  const {
    articleData
  } = props

  setTimeout(() => {
    let article = document.querySelector('.sheet-content article') as HTMLElement
    article.innerHTML = articleData.content
  }, 800)

  return (
    <div className='sheet-content'>
      <SheetBackground {...props} />

      <div className='article-options'>
        <div id="button-minimize-content" onClick={handles.clickMinimize}><img src={images.icons.collapse} /></div>
        <div id="button-maximize-content" onClick={handles.clickMaximize}><img src={images.icons.expand} /></div>
      </div>
      <article className={'open'}></article>
    </div>
  )
}

export default BlogContent