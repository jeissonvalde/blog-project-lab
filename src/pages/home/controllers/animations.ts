import blogsData from "../../../assets/blogs"
let imgStatistics = 'https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Ficons%2Fstatistics-64.png?alt=media&token=a861ab54-98cb-400b-bcec-2ab8a74a58c5'


export class BlogsInterval {
  headlineListInterv: any

  presentation = (blogList: []) => {
    setTimeout(() => {

      let intev = setInterval(() => {
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

            // Bring here
            next?.classList.add('pointer')
            let prevId = 'img-preview-' + next?.getAttribute('id')
            let imgNext = document.getElementById(prevId) as HTMLElement
            imgNext?.classList.add('bring-the-picture-here')
            
            markerElem.style.transform = `translate(0px, ${next.offsetTop}px)`
            setTimeout(() => imgPointer?.classList.remove('take-away-photography'), 7000)

            // Introduction
            let artImgEffectElem = imgNext.querySelector('.article-image-effect') as HTMLElement

            if (artImgEffectElem) {
              artImgEffectElem.innerHTML = activeMessages(next?.getAttribute('id'))

              setTimeout(() => artImgEffectElem.innerHTML = '', 20000)
            }
          }
        } else { console.log('No está la lista de titulares.') }
      }, 15000) // End interval
      this.headlineListInterv = intev
  
    }, 2000)
  }
}

interface BlogInterface {
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

function activeMessages (id: any) {
  let blg: any

  for (let idx = 0; idx < blogsData.length; idx++) {
    const currentBlg = blogsData[idx];
    if (currentBlg.id == id) blg = currentBlg
  }

  if (!blg?.introduction) return ''
  
  return `
    <div class="pub-preview-intro">
      <div class="img-statistics">
        <img src="${imgStatistics}" /> Estadísticas
      </div>
      ${blg?.introduction.map((intr: string, jdx: number) => {

        return `
          <div class="paragraph-line">
            <span style="--jdx: ${jdx}">${intr}</span>
          </div>
          `
      }).join("")}
    <div>
  `
}

function clickRespose (e: any) {
  
}