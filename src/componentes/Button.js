import { button } from "@nextui-org/theme";
import React from "react";

 const Button = ({ handleClick, label }) => {
  return <button className= "text-tiny uppercase font-bold text-lime-600 border-lime-500" onClick={handleClick}>{label}</button>;
};

export default Button;