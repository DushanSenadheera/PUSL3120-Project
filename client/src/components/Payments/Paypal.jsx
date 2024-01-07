import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Paypal() {
    const initialOptions = {
        clientId: "AX6obRJvscK-AuOr4jccXN1fl9QfjGUwIvnu2feH1qYQ8tTnlztk7OoQRXLW7NsaeeTu5u88FVFpUemP",
        currency: "USD",
        intent: "capture",
    };
    
  return (
    <div>
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons />
        </PayPalScriptProvider>
    </div>
  )
}

export default Paypal