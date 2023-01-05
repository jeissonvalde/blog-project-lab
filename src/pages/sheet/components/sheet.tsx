import React from 'react'
import SheetHeader from './header'
import SheetContent from './content'
import {
  ArticleInterface
} from '../article'

function Sheet (props: { articleData: ArticleInterface, clickGoBack: any }) {

  return (
    <section className="sheet-wrap">
      <SheetHeader clickGoBack={props.clickGoBack} title={props.articleData.title} />
      <SheetContent {...props} />
    </section>
  )
}

export default Sheet