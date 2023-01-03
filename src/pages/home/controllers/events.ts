interface BlogType {
  title: string
}

export function clickLiArticle (blog: BlogType, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement


  if (pageHome) pageHome.classList.add('hide')
  if (pageArticle) pageHome.classList.remove('hide')
}