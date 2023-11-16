import { CardHeader, Card, Image, CardBody, RadioGroup, Radio } from '@nextui-org/react'
import React from 'react'
import LayoutContainer from '@/containers/LayoutContainer'
//allInfo es todo mi json
export const ShowSingleProduct = ({ producto, allInfo }) => {
    console.log(producto)
    const [selected, setSelected] = React.useState();//el estado del botón (checkbox)


    return (
        <LayoutContainer>
            <div className='h-screen bg-black flex flex-col justify-center items-center'>

                <Card className='bg-red-200 '>
                    <CardHeader>{producto.name}</CardHeader>
                    <div className='grid grid-cols-2'>
                        <Image src='https://picsum.photos/700/400'></Image>
                        <CardBody>
                            Titulo
                            Parrafo
                            gustos
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
        </LayoutContainer >
    )
}
