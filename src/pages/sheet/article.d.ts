
export interface ArticleInterface {
  title: string,
  content: string,
  bgImage: string,
  meta: {}[],
  images: {}[],
  createdBy: {}
}

export interface PublicationInterface {
  article: any,
  articleId: string | null,
  currentPath: {
    path: string,
    req: {
      body: any
    }
  }
}