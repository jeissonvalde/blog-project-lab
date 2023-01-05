import {
  BlogInterface
} from '../home';
import {
  navigateTo
} from '../../../components/bar-navigation/controllers';
import { useNavigate } from 'react-router-dom';

// Click article preview: navigate to Article page.
export function clickArticlePreview (this: any, blog: BlogInterface, e: any) {
  let pageHome = document.getElementsByClassName('Home')[0] as HTMLElement,
    pageArticle = document.getElementsByClassName('Article')[0] as HTMLElement,
    routePath = `/article?id=${blog.id}`

  if (pageHome) {
    pageHome.classList.add('hide-transition-fade-out')
    setTimeout(() => {
      pageHome.classList.add('hide')
      pageHome.classList.remove('hide-transition-fade-out')

      this.props.navigate({ path: routePath, label: 'Artículo' })
    }, 2000)
  }
  window.clearInterval(window.mainInterval)
}