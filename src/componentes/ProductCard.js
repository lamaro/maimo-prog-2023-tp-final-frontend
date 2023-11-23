import Product from '@/pages/product/[slug]';
import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Image} from '@nextui-org/react';
import React from 'react';
import Link from "next/link";

const ProductCard = ({ product  }) => {
    // console.log(slugName, "estoy aca")
    let tipo;
    if (product.name.includes("Pote")) {
        tipo = "pote";
    } else if (product.name.includes("Franuis")) {
        tipo = "franui";
    } else if (product.name.includes("Palito")) {
        tipo = "palito";
    } else {
        // Si no coincide con ninguna de las opciones anteriores
        tipo = "Otro";
    }
const slugName= tipo
    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{product.name}</h4>
            </CardHeader>
            <CardBody>

                    <Image
                        alt={product.name}
                        className="object-cover rounded-xl"
                        src={product.image}
                        width={270}
                    />

                <div>
                    <small className="text-default-500">{product.description}</small>
                    <p className="text-tiny uppercase font-bold">{product?.units}</p>
                    <p className="text-tiny uppercase font-bold">{product?.maxFlavors}</p>
                </div>
                <Link
  href={`/backoffice/products/[id]?id=${slugName}`}
  className="mr-8 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-black rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
>
  Ver más
</Link>
                
            </CardBody>
        </Card>

    );
};

export default ProductCard;
