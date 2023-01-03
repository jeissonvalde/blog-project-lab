
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
            pointer?.classList.remove('pointer')
            next?.classList.add('pointer')

            markerElem.style.transform = `translate(0px, ${next.offsetTop}px)`
          }
        } else { console.log('No está la lista de titulares.') }
      }, 5000)
      this.headlineListInterv = intev
  
    }, 2000)
  }
}