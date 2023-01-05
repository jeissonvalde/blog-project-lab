export function clickGoBack (this: any, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement


  pageArticle.classList.add('hide-transition-fade-out')
  setTimeout(() => {
    pageArticle.classList.add('hide')
    pageArticle.classList.remove('hide-transition-fade-out')

    this.props.navigate({ path: '/', label: 'Inicio' })
  }, 1400)
  /*
  TODO

  if (pageArticle) pageArticle.classList.add('hide')
  if (pageHome) pageHome.classList.remove('hide')
  document.querySelector('.sheet-background-image .sbi-images') as HTMLElement
    ? document.querySelector('.sheet-background-image .sbi-images')!.innerHTML = ''
    : null
  */
}