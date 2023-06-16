import React from "react";
import './styles.css';

export function Padre({
    children, 
    message,
    address,
    setMessage,
    setAddress }) {

    return(
        <div className="padre">
            <h2>Padre</h2>

            <h4>{address === 'padre' && message}</h4>

            <input type="text" placeholder="text message" onChange={(e) => { setMessage(e.target.value) }} />

            <select onChange={(e) => { setAddress(e.target.value) }}>

                <option > Escoge destinatario</option>
                <option value="primo"> Primo</option>
                <option value="Padre"> Padre</option>
                <option value="Hijo"> Hijo</option>
                <option value="Vecino"> Vecino</option>
                <option value="Nieto"> Nieto</option>

            </select>
             {children}

        </div>
    )
    
}