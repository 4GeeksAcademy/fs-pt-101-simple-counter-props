import React from "react";


export const Prueba = (props) => {

    // props = {}

    // props sera un objeto, accedemos por props.llave ---> valor

    // const sum = (a,b) => a+b

    // console.log(sum(2,2))

    console.log('props ---> ', props)

    return (
        <>
            <p>
                esto es componente prueba
            </p>
            <p className="fs-1">
                valor de age {props.age}
            </p>
            <ul>
                <li>{props.city}</li>
                <li>{props.numbers}</li>
                <li>{props.name}</li>
            </ul>

        </>
    )
}
