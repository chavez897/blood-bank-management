import React, { useState } from "react";
import { TransfusionTable } from "./TransfusionTable";
import { TransfusionModal } from "./TransfusionModal";

export const TransfusionScreen = () => {
  const [newTransfusion, setNewTransfusion] = useState(false);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newTransfusion ? <TransfusionModal setNewTransfusion={setNewTransfusion} /> : null}
      <div className="row w-100">
        <div className="w-80">
          <TransfusionTable setNewTransfusion={setNewTransfusion} />
        </div>
      </div>
    </div>
  );
};
