import React from "react";
import logo from './IconWhatsapp.svg';
import PropTypes from "prop-types";

type Props = {
  bgcolor: string;
  icon?: string; //Url del icono
  radius?: number; // border radius del elemento
  phone: string; // Telefono al que se le va enviar el mensaje
  message: string; // Mensaje a enviar
}
const WhatsappButton = ({ bgcolor = '#0cdc4d', message = "Hola mundo", phone = '573111111111', radius = 50, icon }: Props) => {

  return (
    <div style={{ borderRadius: `${radius}px`, overflow: 'hidden', background: bgcolor, width: 50, height: 50, position: 'fixed', bottom: 30, right: 30, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
      <a href={`https://wa.me/${phone}?text=${message.replace(/ /g, '%20')}`} target='_blank'>
        <img style={{ width: 30, height: 30 }} src={icon === undefined ? logo : icon} />
      </a>
    </div>
  )
}

WhatsappButton.propTypes = {
  bgcolor: PropTypes.string,
  radius: PropTypes.number,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  icon: PropTypes.string,
};

WhatsappButton.schema = {
  title: 'Boton de WhatsApp',
  type: "object",
  properties: {
    icon: {
      title: "Logo de WhatsApp que relacione con la marca",
      type: "string",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    phone: {
      title: "Telefono",
      description: "Agrega un numero de telefono",
      type: "string"
    },
    message: {
      title: "Mensaje",
      description: "Agrega un mensaje para enviar",
      type: "string",
      widget: {
        "ui:widget": "textarea"
      }
    }
  }
}

export default WhatsappButton;
