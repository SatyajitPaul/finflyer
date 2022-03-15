import React from 'react';
import './Login.css';

function Login() {
    let price = 10;
    let VAT = 0.25;

    return (
        <div>
        <h1>Login {`Total: ${(price * (1 + VAT)).toFixed(2)}`}</h1>
        </div>
    );
}


export default Login; 