import {
  CardHeader,
  Card,
  Image,
  CardBody,
  RadioGroup,
  Radio,
  Button,
} from "@nextui-org/react";
import React, { useState } from "react";
import LayoutContainer from "@/containers/LayoutContainer";
import { useCartContext } from "@/contexts/Cartcontext";
import PopUpContainer from "@/containers/PopupContainer";
import { ListItem } from "@mui/material";

export const ShowSingleProduct = ({ producto, allInfo }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedGusto, setSelectedGusto] = useState([]);
  const [selectedExtra, setSelectedExtra] = useState([]);
  const { addToCart } = useCartContext();

  console.log(allInfo, "estoy aca dentro para ver que hay");
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };
  const mostrarPopup = () => {
    setShowPopUp(true);
  };
  const handleAdicional = () => {
    setShowPopUp(true);
    if (selectedExtra) {
      addToCart({
        id: selectedExtra.sku,
        name: selectedExtra.name,
        price: selectedExtra.price,
        quantity: 1,
      });

      console.log("Datos guardados:", newData);
    } else {
      console.warn(
        "Por favor, selecciona un producto y un gusto antes de guardar."
      );
    }
  };

  const handleSaveClick = () => {
    setShowPopUp(true);
    if (selectedProduct || selectedGusto) {
      const newData = {
        selectedProduct,
        selectedGusto,
      };

      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        quantity: 1,
        image: selectedProduct.image,
        gusto: selectedGusto,
      });
    } else {
      console.warn(
        "Por favor, selecciona un producto y un gusto antes de guardar."
      );
    }
  };

  const handleSeguirComprando = () => {
    setShowPopUp(false); 
  };

  return (
    <LayoutContainer>
      <div className="h-screen  flex flex-wrap justify-center items-center">
        {producto?.options?.map((p) => (
          <Card key={p.sku} className="bg-red-200 mx-2 my-2 flex-grow max-w-sm">
            <CardHeader>{p.name}</CardHeader>
            <p>{p.description}</p>
            <div className="grid grid-cols-2">
              {/* <Image src={p.image} alt={p.name} /> */}
              <CardBody></CardBody>
            </div>
            <Button onClick={() => handleProductSelect(p)}>
              Seleccionar Producto
            </Button>
          </Card>
        ))}
        {producto?.options[0]?.name?.includes("Franuis") ? (
          ""
        ) : (
          <div>
            <RadioGroup
              label="Selecciona tu gusto favorito"
              value={selectedGusto}
              onValueChange={setSelectedGusto}
            >
              {allInfo &&
                allInfo.gustos.options.map((gusto) => (
                  <Radio key={gusto.sku} value={gusto.name}>
                    {gusto.name}
                  </Radio>
                ))}
            </RadioGroup>
            <RadioGroup
              label="Selecciona tu adicional"
              value={selectedExtra}
              onValueChange={setSelectedGusto}
            >
              {allInfo &&
                allInfo.cucurucho.options.map((gusto) => (
                  <Radio key={gusto.sku} value={gusto.name}>
                    {gusto.name}
                  </Radio>
                ))}
            </RadioGroup>
            Gusto Seleccionado: {selectedGusto}
            <Button onClick={handleAdicional}> guardar adicional</Button>
          </div>
        )}
        <div className={`${showPopUp ? "block" : "hidden"}`}>
          <PopUpContainer
            producto={selectedProduct.name}
            gusto={selectedGusto}
            precio={selectedProduct.price}
            seguirComprando={handleSeguirComprando}
          ></PopUpContainer>
        </div>
        <Button onClick={handleSaveClick}>Guardar</Button>
      </div>
    </LayoutContainer>
  );
};
