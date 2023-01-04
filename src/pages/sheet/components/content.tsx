import React from 'react'
import SheetBackground from './background'
import images from '../../../assets/images.json'
import SheetPeople from './people'
import handles from '../controllers/content'
// sheet-content.css > .blog-content 

interface ArticleInterface {
    title: string,
    content: string,
    bgImage: string,
    meta: {}[],
    images: {}[],
    createdBy: {}
}

function BlogContent (props: ArticleInterface | {}) {
  // setTimeout(() => {
  //   let article = document.querySelector('.sheet-content article') as HTMLElement
  //   article.innerHTML = props.content
  // }, 800)

  return (
    <div className='sheet-content'>
      <SheetBackground />

      <div className='article-options'>
        <div id="button-minimize-content" onClick={handles.clickMinimize}><img src={images.icons.collapse} /></div>
        <div id="button-maximize-content" onClick={handles.clickMaximize}><img src={images.icons.expand} /></div>
      </div>
      <article></article>
    </div>
  )
}

export default BlogContent