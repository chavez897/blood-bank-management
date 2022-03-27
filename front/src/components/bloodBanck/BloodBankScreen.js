import React, { useState } from "react";
import { BloodBankTable } from "./BloodBankTable";
import { BloodBankModal } from "./BloodBankModal";

export const BloodBankScreen = () => {
  const [newStock, setNewStock] = useState(false);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newStock ? <BloodBankModal setNewStock={setNewStock} /> : null}
      <div className="row w-100">
        <div className="w-80">
          <BloodBankTable setNewStock={setNewStock} />
        </div>
      </div>
    </div>
  );
};
