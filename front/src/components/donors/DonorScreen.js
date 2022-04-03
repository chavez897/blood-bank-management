import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { DonorTable } from "./DonorsTable";
import { DonorModal } from "./DonorModal";
import { searchDonors } from "../../actions/donors";

export const DonorScreen = () => {
  const [newDonor, setNewDonor] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [edit, setEdit] = useState(true);
  const [isLoading, SetIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    dispatch(searchDonors("")).then(() => {
      SetIsLoading(false)
      Swal.close();
    });
  }, [dispatch]);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newDonor ? <DonorModal setNewDonor={setNewDonor} isNew={isNew} edit={edit}/> : null}
      <div className="row w-100">
        <div className="w-80">
          {!isLoading ? (
            <DonorTable setNewDonor={setNewDonor} setIsNew={setIsNew} setEdit={setEdit}/>
          ) : null}
        </div>
      </div>
    </div>
  );
};
