import React, { useState } from 'react'
import { Padre } from '../Components/Padre';
import { Hijo } from '../Components/Hijos';
import { Nieto } from '../Components/Nieto';
import { Primo } from '../Components/Primo';
import { Vecino } from '../Components/Vecino';
import { useCustomHook } from './useCustomHook';


// import { buttonLeft } from '../Components/buttonLeft'
// import { buttonRight } from '../Components/buttonRight'



function App() {
  const { message, address, setMessage, setAddress } = useCustomHook();

  return (
    <React.Fragment>

      <Padre>

        <Hijo>

          <Nieto />

          <Primo
            message={message.toUpperCase()}
            address={address.toLocaleLowerCase()}
            setMessage={setMessage}
            setAddress={setAddress}
          />

        </Hijo>

      </Padre>

      <Vecino
        message={message.toLocaleUpperCase()}
        address={address.toLocaleLowerCase()}
        setMessage={setMessage}
        setAddress={setAddress}
      />
    </React.Fragment>
  )
}

export default App
