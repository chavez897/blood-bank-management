import React, { useState } from "react";
import { DonorTable } from "./DonorsTable";
import { DonorModal } from "./DonorModal";

export const DonorScreen = () => {
  const [newDonor, setNewDonor] = useState(false);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newDonor ? <DonorModal setNewDonor={setNewDonor} /> : null}
      <div className="row w-100">
        <div className="w-80">
          <DonorTable setNewDonor={setNewDonor} />
        </div>
      </div>
    </div>
  );
};
