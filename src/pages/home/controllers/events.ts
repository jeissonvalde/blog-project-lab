import {
  BlogInterface
} from '../home';

// Click article preview: navigate to Article page.
export function clickArticlePreview (this: any, blog: BlogInterface, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement,
    routePath = `/article?id=${blog.id}`

  window.Article = blog
  if (pageHome) {
    pageHome.classList.add('hide-transition-fade-out')
    setTimeout(() => {
      pageHome.classList.add('hide')
      pageHome.classList.remove('hide-transition-fade-out')

      this.props.navigate({ path: routePath, label: 'Artículo' })
    }, 1400)
  }
  window.clearInterval(window.mainInterval)
}