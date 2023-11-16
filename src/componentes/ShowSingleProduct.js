import { CardHeader, Card, Image, CardBody, RadioGroup, Radio } from '@nextui-org/react'
import React from 'react'
import LayoutContainer from '@/containers/LayoutContainer'
//allInfo es todo mi json
export const ShowSingleProduct = ({ producto, allInfo }) => {
    console.log(producto)
    const [selected, setSelected] = React.useState();//el estado del botón (checkbox)


    return (
        <LayoutContainer>
            <div className='h-screen w-screen flex  gap-3   bg-rose-50 justify-center items-center'>
            <Image className='col-span-6 mr-4'src={producto.image} alt={producto.name}
            width={500}
            
            ></Image>
                <Card className='bg-red-200 col-span-6'>
                
                    <CardHeader> <h4 className="font-bold text-large text-center">{producto.name}</h4></CardHeader>
                    <div className=''>
                       
                        <CardBody>
                        <p className="text-default-500 mb-4">{producto.description}</p>
                          
                            <div>
                                <RadioGroup
                                    label="Select your favorite city"
                                    value={selected}
                                    onValueChange={setSelected}
                                >
                                    {/* {si tengo toda la info, entonces hace un map para todos los gustos} */}
                                    {allInfo && allInfo.gustos.options.map(gusto => {
                                        return (
                                            <Radio value={gusto.name} key={gusto.sku} >{gusto.name}</Radio>
                                        )
                                    })}

                                </RadioGroup>
                                Gusto Seleccionado: {selected}
                            </div> 
                            Boton
                        </CardBody>
                    </div>

                </Card>

            </div>
            <div className='  bg-rose-50 '>
                
             <h4 className="font-bold text-black  text-large text-start ml-20">Querés ver nuestros gustos? Te los dejamos a mano</h4>
            </div>
        </LayoutContainer >
    )
}
