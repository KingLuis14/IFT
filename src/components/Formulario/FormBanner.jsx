import { useState, useRef } from "react";
import Styles from "./FormBanner.module.scss";

export default function Form(props) {

    const [responseMessage, setResponseMessage] = useState("");
    const loader = useRef(null);
    const modal = useRef(null);
    const iconCheck = useRef(null);
    const formulario = useRef(null);

    const submit = async (e) => {

        e.preventDefault();
        modal.current.showModal();
        loader.current.classList.add(Styles.animate);
        setResponseMessage("Solicitando ...");

        const formData = new FormData(e.target);
        const response = await fetch("https://formsubmit.co/ajax/informes@ift.pe", {
            method: "POST",
            body: formData,
        });


        if (response.ok) {

            loader.current.classList.remove(Styles.animate);
            iconCheck.current.classList.add(Styles.iconShow);

            setResponseMessage("Solicitud Enviada");
        } else {

        }

    }

    const closeDialog = (e) => {
        e.preventDefault();
        formulario.current.reset();
        modal.current.close();
        iconCheck.current.classList.remove(Styles.iconShow);
    }

    return (

        <form onSubmit={submit} className={Styles.formulario} ref={formulario}>
            <h2>Inscribete aqui</h2>
            <input className={Styles.input}
                aria-label="nombre"
                name="nombre"
                id="nombre"
                required
                placeholder="Nombre Completo" />
            <input className={Styles.input}
                type="tel"
                aria-label="numero de celular"
                name="apellido"
                id="apellido"
                required
                placeholder="Número de contacto" />
            <input className={Styles.input}
                aria-label="email"
                name="email"
                type="email"
                id="email"
                required
                placeholder="Email" />
            <select
                name="programasEstudio"
                aria-label="seleccione su programa de estudio"
                id="programas"
                className={Styles.select}>
                {
                    props.itemsProgramas.map((programa, i) => {
                        return <option value={programa} key={i}>{programa}</option>
                    })
                }
            </select>
            <button className={Styles.boton} title="Registrate en el formulario">Inscribete</button>
            {props.redes}
            <dialog className={Styles.modal} ref={modal}>
                <div className={`${Styles.containerIcons}`} >
                    <span className={`${Styles.loader}`} ref={loader} />
                    <span className={`${Styles.checkIcon}`} ref={iconCheck}>
                        {props.iconCheck}
                    </span>
                </div>
                <h3>{responseMessage}</h3>
                <button className={Styles.botonClose} onClick={closeDialog}>X</button>
            </dialog>
        </form>
    )
}

