import React from "react"
import images from "../../../assets/images.json"

function Header (props: {}) {
  

  return (
    <header>
      <img className="button-nav-back" src={images.icons["left-arrow"]} alt='go back' />
    </header>
  )
}

export default Header