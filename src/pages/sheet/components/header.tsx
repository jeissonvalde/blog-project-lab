import React from "react"
import images from "../../../assets/images.json"

function Header (props: { title: string, clickGoBack: any }) {
  let articleData = window.Article

  return (
    <header>
      <div className="button-go-back" onClick={props.clickGoBack}>
        <img className="button-nav-back" src={images.icons["left-arrow"]} alt='go back' />
      </div>

      <div className="article-title">
        <span>{articleData.title}</span>
      </div>
    </header>
  )
}

export default Header