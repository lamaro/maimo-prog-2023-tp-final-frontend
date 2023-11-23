import React from 'react';
import { useCartContext } from '@/contexts/Cartcontext';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const PreviousCart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart } = useCartContext();

  const calcularPrecioFinal = () => {
    const precioFinal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return precioFinal;
  };

  return (
    <div>
      <h1 className='text-black text-6xl font-bold text-center mb-10'>Carrito de Compras</h1>
      {cart.length > 0 ? (

        <section className="text-gray-600 body-font">
        <div className="">
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded">
                <th className="px-20 py-3">Producto</th>
                <th className="px-20 py-3">Unidad</th>
                  <th className="px-10 py-3">Total</th>
                  <th className="px-32 py-3 text-center">Cantidad</th>
                  
                  

            </th>
                
                </tr>
              </thead>
              <tbody>
               
                  {cart.map((item, index) => (
            <Card className="m-4 " key={index}>
              <CardHeader className="px-10 py-3">{item.name}{item.gusto}</CardHeader>
              
                <tr >     
                <td className="pl-10 pr-20 py-3">{<Image src={item.image} alt={item.name} width={100} />}</td>
                <td className="pl-20 pr-32 align-middle">${item.price }</td>
                <td className="pr-24 py-3 align-middle">${item.price * item.quantity}</td>
                <td className="px-4 py-3 align-middle"><Button onClick={() => addToCart(item)}>+</Button></td>
                <td className="px-4 py-3 align-middle">{item.quantity}</td>
                <td className="px-4 py-3 align-middle"><Button onClick={() => removeFromCart(item)}>-</Button></td>
                <td className="px-4 py-3 align-middle"><Button onClick={() => deleteFromCart(item)}><Image  src='/assets/eliminarProducto.png' alt='Eliminar' width={20}/></Button></td>
                </tr>
              
            </Card>
          ))}

              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
          <p class="text-black inline-flex items-center md:mb-2 lg:mb-0">Precio Final: <span className='px-4 font-bold'> $ {calcularPrecioFinal()}</span>
              
            </p>
          <Button className='flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded'>Realizar Pago</Button>
          </div>
        </div>
      </section>
         
      ) : (
        <>
        <div className="flex items-center justify-center ">
        <Image  src='/assets/carritoVacio.png' alt='Carrito Vacío' width={250}/>
        </div>
        <h2 className='text-black text-center'>El carrito está vacío :(</h2>
        </>)}
      
    </div>
  );
};

export default PreviousCart;
