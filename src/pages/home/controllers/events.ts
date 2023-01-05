import {
  BlogInterface
} from '../home'

// Click article preview: navigate to Article page.
export function clickArticlePreview (this: any, blog: BlogInterface, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement

  // Change state
  this.setState({ redirect: `/article?id=${blog.id}` })  
  window.Article = blog

  if (pageHome) {
    pageHome.classList.add('hide-transition-fade-out')
    setTimeout(() => {
      pageHome.classList.add('hide')
      pageHome.classList.remove('hide-transition-fade-out')
    }, 2000)
  }
  if (pageArticle) {
    pageArticle.classList.remove('hide')
    pageArticle.classList.add('hide-transition-fade-in')
    // Stop home articles animation
    clearInterval(this.state.mainInterval)
    clearInterval(window.mainInterval)

    /*
    let articleTitleElem = pageArticle.querySelector('.article-title span') as HTMLElement
    articleTitleElem.innerHTML = blog.title

    // Print article
    let articleContent = document.querySelector('.sheet-content article') as HTMLElement,
      bgImages = document.createElement('div'),
      articleBackgroundImages = document.querySelector('.sheet-background-image .sbi-images')

    if (articleContent) {
      articleContent.innerHTML = blog.content
      articleContent.classList.add('open')

      // Set images
      for (let idx = 0; idx < blog.images.length; idx++) {
        const imageData = blog.images[idx] as BgImageInterface
        const imageElem = document.createElement('img') as any
        imageElem.setAttribute('src', imageData.src)
        imageElem.setAttribute('data-index', String(idx))
        imageElem.setAttribute('alt', imageData.alt || 'imagen de ' + blog.title)

        imageElem.onload = loadBgImage as any
        (idx % 2) == 0 // Even
          ? imageElem.setAttribute('style', `--direction: 200; --idx: ${idx};`)
          : imageElem.setAttribute('style', `--direction: -200; --idx: ${idx};`)

        articleBackgroundImages?.append(imageElem)
      }
    } */
  }
}