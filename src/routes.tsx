import Home from './pages/home'
import Sheet from './pages/sheet'

// Res
import images from './assets/images.json'

export default [
  {
    Container: Home,
    label: 'Inicio',
    icon: {
        tag: 'img',
        value: images.routes.home,
        alt: 'home image'
    }
  },
  {
    Container: Sheet,
    label: 'Publicación',
    icon: {
        tag: 'img',
        value: images.routes.post,
        alt: 'publication image'
    }
  },
]