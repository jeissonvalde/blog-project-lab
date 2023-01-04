import React from 'react'

export function PreviewIntro () {
  let blg = [{}] as any

  return (
    <div className="pub-preview-intro">
      <div className="img-statistics">
        <img src="${imgStatistics}" /> Estadísticas
      </div>
      ${blg?.introduction.map((intr: string, jdx: number) => {

        return (
          <div className="paragraph-line">
            <span style={{"--jdx": jdx} as any}>{intr}</span>
          </div>
        )
      }).join("")}
    </div>
  )
}