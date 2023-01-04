
export interface BlogInterface {
  title: string,
  url: string,
  id: string,
  introduction: any[],
  messages: any[],
  content: string,
  bgImage: string,
  bgImageAuthor: string,
  alt: string,
  meta: {}[],
  createdAt: string,
  className: string,
  images: [],
  createdBy: {}
}

export interface BlogInterface {
  title: string,
  content: string,
  images: any[]
}

export interface BgImageInterface {
  src: string,
  alt: string
}