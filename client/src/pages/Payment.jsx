import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Gateway from "../components/Payments/Gateway";
const initialOptions = {
  clientId:
    "AX6obRJvscK-AuOr4jccXN1fl9QfjGUwIvnu2feH1qYQ8tTnlztk7OoQRXLW7NsaeeTu5u88FVFpUemP",
  currency: "USD",
  intent: "capture",
};

export default function App() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <PayPalScriptProvider options={initialOptions}>
        <Gateway />
      </PayPalScriptProvider>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
