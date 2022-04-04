import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { RecipientTable } from "./RecipientTable";
import { RecipientModal } from "./RecipientModal";
import { searchRecipients } from "../../actions/recipients";

export const RecipientScreen = () => {
  const [newRecipient, setNewRecipient] = useState(false);
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
    dispatch(searchRecipients("")).then(() => {
      SetIsLoading(false);
      Swal.close();
    });
  }, [dispatch]);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newRecipient ? (
        <RecipientModal
          setNewRecipient={setNewRecipient}
          isNew={isNew}
          edit={edit}
        />
      ) : null}
      <div className="row w-100">
        <div className="w-80">
          {!isLoading ? (
            <RecipientTable
              setNewRecipient={setNewRecipient}
              setIsNew={setIsNew}
              setEdit={setEdit}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
