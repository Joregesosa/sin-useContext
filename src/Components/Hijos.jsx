import React from "react";
import './styles.css';

export function Hijo({children}) {

    return(
        <div className="hijo">
            <h2>Hijo</h2>
             {children}
        </div>
    )
    
}