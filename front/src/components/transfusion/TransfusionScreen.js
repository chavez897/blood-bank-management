import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TransfusionTable } from "./TransfusionTable";
import { TransfusionModal } from "./TransfusionModal";
import { searchBloodBank, searchBloodValid } from "../../actions/bloodBank";
import { searchRecipients } from "../../actions/recipients";
import Swal from "sweetalert2";
import { searchDoctors } from "../../actions/doctors";
import { searchHospital } from "../../actions/hospital";
import { searchTransfusion } from "../../actions/transfusions";

export const TransfusionScreen = () => {
  const [newTransfusion, setNewTransfusion] = useState(false);
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
    dispatch(searchRecipients(""));
    dispatch(searchDoctors());
    dispatch(searchHospital());
    const today = new Date();
    dispatch(
      searchBloodValid(
        today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
      )
    );
    dispatch(searchTransfusion("")).then(() => {
      SetIsLoading(false);
      Swal.close();
    });
  }, [dispatch]);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newTransfusion ? (
        <TransfusionModal
          setNewTransfusion={setNewTransfusion}
          isNew={isNew}
          edit={edit}
        />
      ) : null}
      <div className="row w-100">
        <div className="w-80">
          {!isLoading ? (
            <TransfusionTable
              setNewTransfusion={setNewTransfusion}
              setIsNew={setIsNew}
              setEdit={setEdit}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
