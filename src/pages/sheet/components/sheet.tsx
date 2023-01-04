import React from 'react'
import SheetHeader from './header'
import SheetContent from './content'

function Sheet (props: {
  title: string,
  content: string,
  bgImage: string,
  meta: {}[],
  images: {}[],
  createdBy: {},
} | {}) {
  
  return (
    <section className="sheet-wrap">
      <SheetHeader />
      <SheetContent />
    </section>
  )
}

export default Sheet