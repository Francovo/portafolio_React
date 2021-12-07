import React, { useState } from 'react'
import "../styles/StyleNav.css"
const Nav = () => {
    const [nav,setNav]=useState(false)

    return (
        <header>
      <div className="conte_nav">
        <span className="btn center" id="btn" onClick={()=>setNav(!nav)}><i className="fa fa-bars"></i></span>
        <span className="logo center">Logo</span>
        <nav className="nav" id="nav" style={{height:nav ? "400px" : ""}}>
          <ul className="list_nav">
            <li className="item_nav"><a className="link_nav" href="#">Hola</a></li>
            <li className="item_nav"><a className="link_nav" href="#">AbProjects</a></li>
            <li className="item_nav"><a className="link_nav" href="#">Testimonios</a></li>
            <li className="item_nav"><a className="link_nav" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>

      <a className="descargar center" href="#">Descargar Curriculum</a>

    </header>
    )
}

export default Nav