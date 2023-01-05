import Home from './pages/home'
import Sheet from './pages/sheet'

// Res
import images from './assets/images.json'

export default [
  {
    index: true,
    Container: Home,
    path: '/',
    label: 'Inicio',
    icon: {
        tag: 'img',
        value: images.routes.home,
        alt: 'home image'
    }
  },
  {
    Container: Sheet,
    path: 'article/',
    label: 'Publicación',
    icon: {
        tag: 'img',
        value: images.routes.post,
        alt: 'publication image'
    }
  },
];