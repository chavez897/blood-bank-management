import React, { useState } from "react";
import { BloodBankTable } from "./BloodBankTable";
import { BloodBankModal } from "./BloodBankModal";

export const BloodBankScreen = () => {
  const [newStock, setNewStock] = useState(false);
  const [isNew, setIsNew] = useState(false);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newStock ? <BloodBankModal setNewStock={setNewStock} isNew={isNew} /> : null}
      <div className="row w-100">
        <div className="w-80">
          <BloodBankTable setNewStock={setNewStock} setIsNew={setIsNew}/>
        </div>
      </div>
    </div>
  );
};
