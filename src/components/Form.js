import { useState } from "react";
import { Formik } from "formik";

export default function Form() {
    const [formularioEnviado, cambiarFormularioEnvidao] = useState(false)
  return (
    <section className="section_Form">
      <h4 className="h4_Form">Contacto</h4>
      <p className="Parra_Form">
        Si está interesado en trabajar conmigo en su próximo proyecto, no dude
        en ponerse en contacto.
      </p>

      <Formik
            initialValues={{
                nombre: '',
                correo: ''
            }}
            validate={(valores) =>{
                let errores = {};

                //Validacion nombre
                if(!valores.nombre){
                    errores.nombre = "Porfavor ingresa un nombre"
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre="El nombre solo puede contener letras y espacios"
                }

                //Validacion correo
                if(!valores.correo){
                    errores.correo = "Porfavor ingresa un correo electronico"
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo="El correo solo puede contener letras y espacios"
                }

                return errores;
            }}
            onSubmit={(valores, {resetForm}) =>{
                resetForm();
                console.log('Formulario enviado');
                cambiarFormularioEnvidao(true);
                setTimeout(() => cambiarFormularioEnvidao(false), 5000);
            }}
      >
        {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
          <form className="Form" onSubmit={handleSubmit}>
            <input
              className="input_Form"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            <input
              className="input_Form"
              type="email"
              id="correo"
              name="correo"
              placeholder="Correo"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}

            <textarea className="text_Form" placeholder="Mensaje"></textarea>
            <button type="submit" className="btn_Form"> Enviar Mensaje </button>
            {formularioEnviado && <p className="exito"> Formulario enviado con exito </p> }
          </form>
        )}
      </Formik>
    </section>
  );
}
