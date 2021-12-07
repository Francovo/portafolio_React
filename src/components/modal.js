export default function Modal({title,parrafo}) {
  return (
    <div className="modal_Container">
      <header className="header">
        <h3>{title}</h3>
      </header>

      <article className="article">
        <p>
          {parrafo}
        </p>
      </article>

      <div className="Container_btn">
        <button className="btn">Ver proyecto completo</button>
        <button className="btn">Ver código</button>
      </div>
    </div>
  );
}

