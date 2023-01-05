import {
  ArticleInterface
} from '../article'

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

function Background (props: { articleData: ArticleInterface }) {
  let articleData = props.articleData

  return (
    <div className="sheet-background-image loading">
      <div className="sbi-images">

        {articleData.images.map((image: any, idx: number) => {
          let styleImage = {} as any
          styleImage["--idx"] = idx

          if ((idx % 2) == 0) { // Even
            styleImage["--direction"] = '200'
          } else {
            styleImage["--direction"] = '-200'
          }

          return (
            <img
              src={image.src}
              style={styleImage}
              data-index={idx}
              onLoad={loadBgImage}
              alt={image.alt || 'imagen de ' + articleData.title}/>
          )
        })}
      </div>
    </div>
  )
}

export default Background