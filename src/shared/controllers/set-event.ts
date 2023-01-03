/** { event onstr, handler fn, elem querySelector }*/
function setEvent (params: any) {
  if (!params.event) return alert('shared/controlers/set-event: no event.')
  if (!params.handler) return alert('shared/controlers/set-event: no handler.')
  if (!params.elem && !params.id) return alert('shared/controlers/set-event: no elem no id.')

  let handler = function (timeout: any) {
    let elem = document.body.querySelector(params.elem) || document.getElementById(params.id)
    if (elem) {
      if (!elem[params.event]) {
        elem[params.event] = params.handler
      }
    }
  }

  setTimeout(handler.bind(null, 200), 200)
  setTimeout(handler.bind(null, 500), 500)
  setTimeout(handler.bind(null, 900), 900)
  setTimeout(handler.bind(null, 1200), 1200)
  setTimeout(handler.bind(null, 1500), 1500)
  setTimeout(handler.bind(null, 2000), 2000)
  setTimeout(handler.bind(null, 3000), 3000)
}

declare global {
  interface Window {
    events: any,
  }
}

// For just one time, for react components.
class GlobalEvent {
  events: any

  constructor() {
    this.events = {}
  }

  setEventGlobal = (params: { id: string, handler: any, noKillId: boolean }) => {
    if (!params.id) return alert('Se necesita un id en setEventGlobal')
    if (!params.handler) return alert('Se necesita un handler en setEventGlobal')
    if (!window.events) window.events = {}
  
  
    if (!window.events[params.id]) {
      params.handler()
      
      window.events[params.id] = new Date()
      console.log('Se inició un evento global', )
    }
  }
}

export default {
  setEvent,
  GlobalEvent
}