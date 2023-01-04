
interface BlogType {
  title: string,
  content: string,
  images: any[]
}

declare global {
  interface Window {
    currentArticle: any
  }
}

export function clickLiArticle (blog: BlogType, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement


  if (pageHome) pageHome.classList.add('hide')
  if (pageArticle) {
    pageArticle.classList.remove('hide')

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
        const imageData = blog.images[idx]
        const imageElem = document.createElement('img') as any
        imageElem.setAttribute('src', imageData.src)
        imageElem.setAttribute('data-index', String(idx))
        imageElem.setAttribute('alt', imageData.alt || 'imagen de ' + blog.title)

      // if (idx === 0) {
        imageElem.onload = loadBgImage as any
      // }
        (idx % 2) == 0 // Even
          ? imageElem.setAttribute('style', `--direction: 200; --idx: ${idx};`)
          : imageElem.setAttribute('style', `--direction: -200; --idx: ${idx};`)

        articleBackgroundImages?.append(imageElem)
      }
    }
  }
}

function loadBgImage (e: any) {
  let articleBackgroundImages = document.querySelector('.sheet-background-image') as HTMLElement,
    img = e.target,
    imgW = img.offsetWidth,
    imgH = img.offsetHeight

  if (imgW > imgH) img.classList.add('full-height')
  if (imgW < imgH) img.classList.add('full-width')

  setTimeout(() => {
    articleBackgroundImages.classList.remove('loading')
  }, 1000)
}