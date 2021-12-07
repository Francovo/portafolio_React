import Modal from "./modal";

export default function Proyects() {
  const infoModales = [{title:"NIKO",
                        parrafo: "Niko es una de las marcas y proveedores de equipamiento deportivo más reconocidas y valiosas en todo el mundo",},
                      {title:"Príncipe fresco",
                      parrafo: "La serie está protagonizada por Will Smith como una versión ficticia de sí..."},
                      {title:"Amazonas",
                      parrafo: "Amazonas es la empresa en internet de venta al por menor más grande del..."}]
  return (
    <div className="Proyects">
      <div className="container_Proyect">
        <div className="container_Row">
        <div className="title_Proyect">
        <h1> Parece magia, funciona con código </h1>
        </div>
        <div className="parrafo_Proyect">
          <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
        </div>
        </div>

        <div className="image">

          <Modal title= {infoModales[0].title}
          parrafo= {infoModales[0].parrafo}
          />

        </div>
      </div>


      <div className="container_Proyect_2">

      <div className="image2">

            <Modal title= {infoModales[1].title}
          parrafo= {infoModales[1].parrafo}
          />
      </div>

      <div className="image3">

            <Modal title= {infoModales[2].title}
          parrafo= {infoModales[2].parrafo}
          />
      </div>

      </div>
    </div>
  );
}
