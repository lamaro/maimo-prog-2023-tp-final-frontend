import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader, Image} from '@nextui-org/react';
import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product)


    return (
        <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large">{product.name}</h4>
            </CardHeader>
            <CardBody>

                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={product.image}
                        width={270}
                    />

                <div>
                    <small className="text-default-500">{product.description}</small>
                    <p className="text-tiny uppercase font-bold">{product?.units}</p>
                    <p className="text-tiny uppercase font-bold">{product?.maxFlavors}</p>
                </div>
                <Button color="green" variant="ghost" className= "text-tiny uppercase font-bold">Ver más</Button>
                
            </CardBody>
        </Card>

    );
};

export default ProductCard;
