import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BloodBankTable } from "./BloodBankTable";
import { BloodBankModal } from "./BloodBankModal";
import { searchDonors } from "../../actions/donors";
import Swal from "sweetalert2";
import { searchBloodBank } from "../../actions/bloodBank";

export const BloodBankScreen = () => {
  const [newStock, setNewStock] = useState(false);
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
    dispatch(searchDonors(""))
    dispatch(searchBloodBank("")).then(() => {
      SetIsLoading(false);
      Swal.close();
    });
  }, [dispatch]);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newStock ? (
        <BloodBankModal setNewStock={setNewStock} isNew={isNew} edit={edit} />
      ) : null}
      <div className="row w-100">
        <div className="w-80">
          {!isLoading ? (
            <BloodBankTable
              setNewStock={setNewStock}
              setIsNew={setIsNew}
              setEdit={setEdit}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
