import React from "react";
import { DonorModal } from "./DonorModal";
import { DonorTable } from "./DonorsTable";

export const DonorScreen = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {/*-<DonorModal /> */}
      <div className="row w-100">
        <div className="w-80">
          <DonorTable />
        </div>
      </div>
    </div>
  );
};
