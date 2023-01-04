import React from "react"
import {
  clickGoBack
} from "../controllers/header"
import images from "../../../assets/images.json"

function Header (props: {}) {

  return (
    <header>
      <div className="button-go-back" onClick={clickGoBack}>
        <img className="button-nav-back" src={images.icons["left-arrow"]} alt='go back' />
      </div>

      <div className="article-title">
        <span></span>
      </div>
    </header>
  )
}

export default Header