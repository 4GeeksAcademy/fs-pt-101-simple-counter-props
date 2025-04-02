import React from "react";


export const PruebaDos = ({ brand, model, year }) => {


    const testing = {
        uno: 'lalala',
        dos: 'lelele',
        tres: 'lololo'
    }
    //desestructurar un objeto
    const { uno, dos } = testing
    console.log('despues de desestructurar ', uno, dos)

    //desestructurando en el parametro de la funcion el objeto
    const func = ({ uno, dos }) => {
        console.log(uno, dos)
    }
    func(testing)




    return (
        <>
            <div className="border border-2">
                <ul>
                    <li>{brand}</li>
                    <li>{model}</li>
                    <li>{year}</li>
                </ul>
            </div>
        </>
    )
}