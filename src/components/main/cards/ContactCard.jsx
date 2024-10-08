import React from "react";
import './contactCard.scss';

const ContactCard = () => {
  return (
    <div className="contactContainer">
      <div className="infoContactContainer">
  <h2 className="title">CONTACTO</h2>
  <p className="infoContact">
    Si te apetece que hablemos, puedes escribirme por el formulario de contacto, directamente al correo <strong>angelesmartinezfotografia@gmail.com</strong> o por redes sociales.
    ¿Tienes pensado hacer una sesión de fotos de familia o regalar un reportaje para alguien especial?, ¿te han quedado dudas?, Ponte en contacto conmigo y resolveré todas tus preguntas.
    Cuéntame tu idea, igual podemos organizar una sesión de Navidad junto a otras familias que conozcas y hacer un plan divertido, además de tener un descuento especial al ser varios.
  </p>
  <p className="socialMediaInfo">Contáctame a través de mis redes sociales y juntos crearemos recuerdos mágicos...</p>
  </div>
  <div className="socialMediaContainer">
    <img className="socialMediaImage" src="/assets/icons/instagram.svg" alt="Instagram Logo" />
    <img className="socialMediaImage2" src="/assets/icons/tiktok.svg" alt="Tiktok Logo" />
  </div>
  <div className="socialFormMediaContainer">
  <div className="socialFormMediaContainerTitle">
    <h2 className="formTitle">Formulario de contacto</h2>
  </div>
  <div className="litleHealpersContainer">
    <img className="litleHealpers" src="/assets/icons/Contact.jpg" alt="Contact Image" />
  </div>
  <div className="formContainer">
    <div className="form1">
      <form action="submeterForm" method="post">
        <div className="formRow">
          <p>
            <label className="nameForm" htmlFor="nameRequired">
              Nombre
              <span className="required">*</span>
            </label>
            <input 
            className='inpName'
              type="text"
              name="name"
              id="name"
              required="required"
              placeholder="Escribe tu nombre"
            />
          </p>
          <p>
            <label htmlFor="email" className="insertEmail">
              Email
              <span className="required">*</span>
            </label>
            <input
            className='inpEmail'
              type="email"
              name="email"
              id="email"
              required="required"
              placeholder="Escribe tu email"
            />
          </p>
        </div>
        <p>
          <label htmlFor="message" className="messageRequired">
            Mensaje
            <span className="required">*</span>
          </label>
          <textarea
            name="textMessage"
            className="textMessage"
            id="message"
            required="required"
            placeholder="Deja aquí tu comentario..."
          ></textarea>
        </p>
        <button className="btnContactCard" type="submit" name="sendForm" id="send">
          <p>Enviar</p>
        </button>
        <p className="alert">
          <span className="required"> * </span>los campos son obligatorios
        </p>
      </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default ContactCard;
