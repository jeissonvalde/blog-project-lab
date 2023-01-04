import blogsData from "../../../assets/blogs"
import React, { useState, Component } from 'react'
let imgStatistics = 'https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Ficons%2Fstatistics-64.png?alt=media&token=a861ab54-98cb-400b-bcec-2ab8a74a58c5'

/*
  The item list pointer can be managed from the title list, located at the top left. 
  Selecting a title brings up each article submission with "bring-the-picture-here" css. 
  After a moment it is removed with "take-away-photography" css.

  Selecting a title to preview disables automatic viewing.
*/
export function presentation (this: any, blogList: []) {
  // let This = this as any
  setTimeout(() => {

    let interv = setInterval(() => {
      let headlineListElem = document.getElementById('home-headline-list')

      if (headlineListElem) {
        let headlineItems = headlineListElem.getElementsByTagName('li') as HTMLCollectionOf<HTMLElement>,
          pointer = null,
          next = headlineItems[1] && !headlineItems[1].classList.contains('marker') ? headlineItems[1] : null,
          markerElem = headlineListElem.querySelector('li.marker') as any


        // Start search pointer
        for (let idx = 0; idx < headlineItems.length; idx++) {
          const hlitem = headlineItems[idx]
          if (hlitem.classList.contains('pointer')) {
            pointer = hlitem
            next = headlineItems[idx + 1] && !headlineItems[idx + 1].classList.contains('marker')
              ? headlineItems[idx + 1]
              : headlineItems[0]
          }
        } // End search pointer (for).


        if (next && markerElem) {
          // Take away
          pointer?.classList.remove('pointer')
          let imgPointer = document.getElementById('img-preview-' + pointer?.getAttribute('id'))
          imgPointer?.classList.remove('bring-the-picture-here')
          imgPointer?.classList.add('take-away-photography')
          setTimeout(() => imgPointer?.classList.remove('take-away-photography'), 6500)

          // Bring here
          next?.classList.add('pointer')
          let prevId = 'img-preview-' + next?.getAttribute('id')
          let imgNext = document.getElementById(prevId) as HTMLElement
          imgNext?.classList.add('bring-the-picture-here')

          markerElem.style.transform = `translate(0px, ${next.offsetTop}px)`
          setTimeout(() => imgPointer?.classList.remove('take-away-photography'), 7000)
        }
      } else { console.log('No está la lista de titulares.') }
    }, 30000) as any // End interval
    
    window.mainInterval = interv
    this.setState({
      mainInterval: interv
    })
  }, 1000)
}

// opt: { callback }
export function stopPresentation (this: any, opts: any) {
  clearInterval(this.state.mainInterval)
  clearInterval(window.mainInterval)

  let headlineListElem = document.getElementById('home-headline-list'),
    headlineItems = headlineListElem?.getElementsByTagName('li') as HTMLCollectionOf<HTMLElement>,
    pubPreviewImagesElem = document.querySelector('.pub-preview-images'),
    articleImageElems = pubPreviewImagesElem?.getElementsByClassName('article-image') as HTMLCollectionOf<HTMLElement>

  // Start clean pointers
  for (let idx = 0; idx < headlineItems.length; idx++) {
    headlineItems[idx].classList.remove('pointer')
  }

  for (let jdx = 0; jdx < articleImageElems.length; jdx++) {
    if (articleImageElems[jdx].classList.contains('bring-the-picture-here')) {
      articleImageElems[jdx].classList.remove('bring-the-picture-here')
      articleImageElems[jdx].classList.add('take-away-photography')

      setTimeout(() => {
        articleImageElems[jdx].classList.remove('take-away-photography')
      }, 7000)
      continue
    }

    articleImageElems[jdx].classList.remove('bring-the-picture-here')
    articleImageElems[jdx].classList.remove('take-away-photography')
  }
  // End clean pointers (for).
}

export function selectLi (this: any, idBlg: string) {
  let markerElem = document.querySelector('#home-headline-list li.marker') as any,
    liElem = document.getElementById(idBlg) as HTMLElement
    

  this.stopPresentation()
  markerElem.style.transform = `translate(0px, ${liElem.offsetTop}px)`
  liElem?.classList.add('pointer')
  setTimeout(() => {
    document.getElementById('img-preview-' + idBlg)?.classList.add('bring-the-picture-here')
  }, 400)
}

export function clickRespose (e: any) {
  
}