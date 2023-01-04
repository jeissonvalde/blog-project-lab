import React from 'react'
let imgStatistics = 'https://firebasestorage.googleapis.com/v0/b/tech-website-59d72.appspot.com/o/images%2Ficons%2Fstatistics-64.png?alt=media&token=a861ab54-98cb-400b-bcec-2ab8a74a58c5'

export function PreviewIntro (props: any) {
  let {
    blg,
    current,
  } = props

  if (!blg.introduction || !blg.introduction[0]) return (
    <></>
  )

  return (
    <div className="pub-preview-intro">
      <div className="img-statistics no-display">
        <img src={imgStatistics} /> Estadísticas
      </div>

      <div className="pub-preview-intro-introduction">
        {blg.introduction.map((intr: any, jdx: number) => {
          let textStyle = {
            "--jdx": jdx + 1
          } as any

          return (
            <div key={jdx} className="paragraph-line">
              <span style={textStyle}>{intr}</span>
            </div>
          )
        })}
      </div>

      <div className="pub-preview-intro-speak">
        {blg.messages.map((messData: any, kdx: number) => {

          return (
            <div key={kdx} className="ppis-message">
              <p className="ppis-conversation">{messData.message}</p>
              <div className="ppis-prompt">
                {messData.prompt.map((prom: any, ldx: number) => {

                  return (
                    <div key={ldx} className="ppis-prompt-opt" data-value={prom.data}>{prom.label}</div>
                  )
                })}
              </div>
              <div className="ppis-message field">
                <input placeholder="Mensaje" />
                <div className="button-prompt-send-message">
                  Enviar mensaje
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}