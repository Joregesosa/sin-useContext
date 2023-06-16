import React from "react";
import './styles.css';

export function Padre({children}) {

    return(
        <div className="padre">
            <h2>Padre</h2>
             {children}

        </div>
    )
    
}