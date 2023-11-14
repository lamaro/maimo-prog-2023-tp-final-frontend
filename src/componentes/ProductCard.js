import { Accordion, AccordionItem, Button, Card, CardBody, CardHeader } from '@nextui-org/react';
import React from 'react';

const ProductCard = ({ product }) => {
    console.log(product)


    return (
        <Card>
            <CardHeader>
                {product.name}
            </CardHeader>
            <CardBody>
                {product?.units}
                {product?.maxFlavors}
                <Accordion>
                    <AccordionItem>
                        <Button>
                            Chocolate
                        </Button>
                        <Button>Frutilla</Button>

                    </AccordionItem>

                </Accordion>
            </CardBody>
        </Card>

    );
};

export default ProductCard;
