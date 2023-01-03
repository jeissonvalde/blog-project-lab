
function clickMinimize (e:any) {
  let article = document.querySelector('.sheet-content article') as HTMLElement,
    buttonMinimize = document.querySelector('.article-options #button-minimize-content') as HTMLElement,
    buttonMaximize = document.querySelector('.article-options #button-maximize-content') as HTMLElement
  
  article.classList.add('minimize')
  // article.style.transition = 'transition: opacity .4s 0s !important;'
  buttonMinimize.style.display = 'none'
  buttonMaximize.style.display = 'flex'
}

function clickMaximize (e:any) {
  let article = document.querySelector('.sheet-content article') as HTMLElement,
    buttonMinimize = document.querySelector('.article-options #button-minimize-content') as HTMLElement,
    buttonMaximize = document.querySelector('.article-options #button-maximize-content') as HTMLElement
  
  article.classList.remove('minimize')
  buttonMinimize.style.display = 'flex'
  buttonMaximize.style.display = 'none'
}

export default {
  clickMinimize,
  clickMaximize
}