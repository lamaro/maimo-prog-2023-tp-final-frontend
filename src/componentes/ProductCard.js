import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      {product.map((prod) => (
        <div key={prod.id}>
          <h2>{prod.name}</h2>
          {prod.options.map((op) => (
            <div key={op.sku}>
              <p>Name: {op.name}</p>
              <p>Price: {op.price}</p>
            </div>
          ))}
          <p>ver mas</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
