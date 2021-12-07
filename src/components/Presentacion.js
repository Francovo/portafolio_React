
import React from 'react'
import "../styles/index.css"
export const Presentacion = () => {
    return (
        <main className="about">
      <section className="info_about">
        <h1 className="title_about"><span>¡Hola a todos!</span><span>Soy Antonio Pereira</span></h1>
        <p className="descripcion_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, provident quasi </p>
      </section>
      <div className="about-image">
        <img src="https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png" alt=""/>
      </div>
    </main>
    )
}

export default Presentacion