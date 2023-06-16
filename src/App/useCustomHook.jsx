import React, { useState } from "react";


export function useCustomHook() {
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState('');
    
    return {
        message,
        address,
        setMessage,
        setAddress
    }
}