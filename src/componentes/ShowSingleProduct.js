import {
  CardHeader,
  Card,
  Image,
  CardBody,
  RadioGroup,
  Radio,
  Button,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import LayoutContainer from "@/containers/LayoutContainer";
import { useCartContext } from "@/contexts/Cartcontext";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";

export const ShowSingleProduct = ({ producto, allInfo }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedGusto, setSelectedGusto] = useState(null);
  const [selectedGustos, setSelectedGustos] = useState([]);
  const [selectedExtra, setSelectedExtra] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [lastSelectedProductId, setLastSelectedProductId] = useState(null);
  const [gustosAccordionOpen, setGustosAccordionOpen] = useState(false);
  const [adicionalesAccordionOpen, setAdicionalesAccordionOpen] =
    useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const { addToCart } = useCartContext();

  useEffect(() => {
    // Verifica si hay al menos una opción seleccionada en los gustos
    setIsNextButtonDisabled(selectedGustos.length === 0);
  }, [selectedGustos]);

  const handleProductSelect = (product) => {
    setSelectedProductId(product.id);
    setSelectedProduct(product);
    setLastSelectedProductId(product.id);
    setIsProductSelected(true);
    setGustosAccordionOpen(true); // Abrir el acordeón de gustos al seleccionar un producto
  };

  const handleNextClick = () => {
    if (gustosAccordionOpen) {
      // Si el acordeón de gustos está abierto, cerrarlo y abrir el de adicionales
      setGustosAccordionOpen(false);
      setAdicionalesAccordionOpen(true);
    } else if (adicionalesAccordionOpen) {
      // Si el acordeón de adicionales está abierto, cerrarlo
      setAdicionalesAccordionOpen(false);
    }
  };

  const handleAdicional = () => {
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

  const handleCheckboxChange = (isChecked, gustoName) => {
    // Implementa lógica de manejo de cambio de checkbox aquí
    if (isChecked) {
      // Agrega el gusto seleccionado
      setSelectedGustos((prevGustos) => [...prevGustos, gustoName]);
    } else {
      // Remueve el gusto deseleccionado
      setSelectedGustos((prevGustos) =>
        prevGustos.filter((gusto) => gusto !== gustoName)
      );
    }
  };

  return (
    <LayoutContainer>
      <div className="h-screen flex flex-col justify-center items-center mb-28">
        {/* Sección de Cards */}
        <div className="section-cards flex flex-wrap">
          {producto?.options?.map((p) => (
            <Card
              key={p.sku}
              className={`bg-white mx-2 my-16 flex-grow max-w-sm ${
                selectedProductId === p.id ? "border-2 border-black" : ""
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="card-content flex-grow">
                  <CardHeader>{p.name}</CardHeader>
                  <Image
                    alt={p.name}
                    className="object-cover rounded-xl"
                    src={p.image}
                    width={270}
                  />
                  <CardBody>
                    <small className="text-default-500">{p.description}</small>
                  </CardBody>
                </div>
                <div className="card-footer flex items-end justify-center pb-4">
                  <Button
                    onClick={() => handleProductSelect(p)}
                    className={`${
                      lastSelectedProductId === p.id
                        ? "bg-green-500 text-white"
                        : "bg-slate-400 text-white"
                    }`}
                  >
                    {lastSelectedProductId === p.id
                      ? "Producto Seleccionado"
                      : "Seleccionar Producto"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Sección de Gustos */}
        <div className="section-gustos mb-16">
          <h2 className="mb-4">Selecciona hasta 4 gustos favoritos</h2>
          {/* Condición para renderizar la sección de checkboxes solo si el acordeón está abierto */}
          {gustosAccordionOpen && (
            <div className="grid grid-cols-2 gap-4">
              {allInfo &&
                allInfo.gustos.options.map((gusto) => (
                  <div key={gusto.sku}>
                    <Checkbox
                      value={gusto.name}
                      onChange={(isChecked) =>
                        handleCheckboxChange(isChecked, gusto.name)
                      }
                      // Desactiva el checkbox si ya hay 4 gustos seleccionados
                      disabled={selectedGustos.length === 4}
                    >
                      {gusto.name}
                    </Checkbox>
                  </div>
                ))}
            </div>
          )}
          {/* Botón de Siguiente (aparece solo cuando el acordeón de gustos está abierto) */}
          {gustosAccordionOpen && (
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleNextClick}
                // Desactiva el botón si no hay gustos seleccionados
                disabled={isNextButtonDisabled}
                // Cambia el color del fondo del botón según si es clickeable o no
                className={`${
                  isNextButtonDisabled
                    ? "bg-gray-400 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                Siguiente
              </Button>
            </div>
          )}
        </div>

        {/* Sección de Adicionales */}
        <div className="section-adicionales flex flex-wrap mb-16">
          {/* Condición para renderizar la sección de checkboxes solo si el acordeón está abierto */}
          {adicionalesAccordionOpen && (
            <CheckboxGroup
              label="Selecciona tus adicionales"
              value={selectedExtras}
              onChange={(values) => setSelectedExtras(values)}
            >
              {allInfo &&
                allInfo.cucurucho.options.map((adicional) => (
                  <Checkbox key={adicional.sku} value={adicional.name}>
                    {adicional.name}
                  </Checkbox>
                ))}
            </CheckboxGroup>
          )}
          {/* Botón de Adicionales (aparece solo cuando el acordeón de adicionales está abierto) */}
          {adicionalesAccordionOpen && (
            <Button className="mb-32" onClick={handleAdicional}>
              Guardar Adicional
            </Button>
          )}
        </div>

        {/* Botón de Guardar */}
        <Button onClick={handleSaveClick}>Guardar</Button>
      </div>
    </LayoutContainer>
  );
};
