import * as React from "react";
import useAlert from "./components/useAlert";

export default function App() {
  const { alerts, createToast } = useAlert();

  const addAlert = (variant: string) => {
    createToast({
      text: "Your message sent successful",
      text: "Alert virus",
      text: "Danger here there inapropiate contain",
      variant,
    });
  };

  return (
    <div>
      <button
        onClick={() => addAlert("success")}
        className="bg-yellow-500 p-2 rounded text-white m-4"
      >
        Message
      </button>
      <button
        onClick={() => addAlert("warning")}
        className="bg-orange-500 p-2 rounded text-white m-4"
      >
        warning a virus!
      </button>
      <button
        onClick={() => addAlert("danger")}
        className="bg-red-500 p-2 rounded text-white m-4"
      >
        danger inapropiate contain!
      </button>
      {alerts}
    </div>
  );
}
