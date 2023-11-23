import { Accordion, AccordionItem, Card, CardBody, CardHeader, Image} from '@nextui-org/react';
import React from 'react';
import Button from '@/componentes/Button'
import { useRouter } from 'next/router';
const ProductCard = ({ product }) => {
    const router = useRouter(); 
    console.log(product)
    const handleClick = () => {
        router.push(`product/${product.sku}`) //cambiar sku a slug
        console.log("clickeado")
    }

    return (
        <Card className="py-0 h-auto">
            
            <CardBody>

                    <Image
                        alt={product.name}
                        className="object-cover "
                        src={product.image}
                        width={400}
                    />
            <CardHeader className="pb-0 pt-2 px-2 flex-col items-start">
                <h4 className="font-bold text-large text-center">{product.name}</h4>
            </CardHeader>
                <div className="px-2 pb-2">
                    <small className="text-default-500">{product.description}</small>
                    <p className="text-tiny uppercase font-bold">{product?.units}</p>
                    <p className="text-tiny uppercase font-bold">{product?.maxFlavors}</p>
                </div>
                 
{/*                <Link href={`product/${product.sku}`}> <Button variant="ghost" className= "text-tiny uppercase font-bold text-lime-600 border-lime-500">Ver más</Button> </Link>
 */} 
            <Button handleClick={handleClick} label={"Ver Más"}/>
            
            </CardBody>
        </Card>

    );
};

export default ProductCard;
