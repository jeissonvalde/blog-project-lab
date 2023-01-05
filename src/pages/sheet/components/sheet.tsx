import React from 'react'
import SheetHeader from './header'
import SheetContent from './content'
import {
  ArticleInterface
} from '../article'

function Sheet (props: { articleData: ArticleInterface }) {
  
  return (
    <section className="sheet-wrap">
      <SheetHeader title={props.articleData.title} />
      <SheetContent {...props} />
    </section>
  )
}

export default Sheet