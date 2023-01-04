
function handleOnLoad (e:any) {
  e.target.style.opacity = '1'
  e.target.style.transform = 'scale(1) translateX(0px)'

  let article = document.querySelector('.sheet-content article') as HTMLElement
  article.style.color = 'black'
  article.style.opacity = '1'
}

function imagesInterval (props: {}) {
  
}

function Background (props: {
  imageURL: string
} | {}) {

  return (
    <div className="sheet-background-image loading">
      <div className="sbi-images"></div>
    </div>
  )
}

export default Background