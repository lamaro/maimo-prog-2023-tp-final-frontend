import React from "react";
import Popup from "../componentes/Popup.js";

const PopUpContainer = ({ producto, gusto, precio, seguirComprando }) => {
  const handleSeguirComprando = () => {
    seguirComprando();
  };
  return <Popup producto={producto} gusto={gusto} precio={precio} seguirComprando={handleSeguirComprando}></Popup>;
};

export default PopUpContainer;
