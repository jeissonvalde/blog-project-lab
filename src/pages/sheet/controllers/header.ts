export const clickGoBack = (e: any) => {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement

  if (pageArticle) pageArticle.classList.add('hide')
  if (pageHome) pageHome.classList.remove('hide')
  document.querySelector('.sheet-background-image .sbi-images') as HTMLElement
    ? document.querySelector('.sheet-background-image .sbi-images')!.innerHTML = ''
    : null
}