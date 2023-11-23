import React from 'react';
import { useCartContext } from '@/contexts/Cartcontext';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const Checkout = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCartContext();

  const calcularPrecioFinal = () => {
    const precioFinal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return precioFinal;
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <Card key={index} className='my-2' style={{ maxWidth: '400px' }}>
              <CardHeader>{item.name}</CardHeader>
              <CardHeader>{item.gusto}</CardHeader>
              <CardBody>
                <p>Precio: {item.price * item.quantity}</p>
                <Image src={item.image} alt={item.name} />
                <p>Cantidad: {item.quantity}</p>
                <Button onClick={() => addToCart(item)}>+</Button>
                <Button onClick={() => removeFromCart(item)}>-</Button>
                <Button onClick={() => deleteFromCart(item)}>Eliminar</Button>
              </CardBody>
            </Card>
          ))}
        </ul>
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <p>Precio Final: {calcularPrecioFinal()}</p>
      <Button>Realizar Pago</Button>
    </div>
  );
};

export default Checkout;
