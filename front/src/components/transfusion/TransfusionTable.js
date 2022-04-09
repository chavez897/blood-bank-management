import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  faEdit,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectedTransfusionAction } from "../../actions/selectedTransfusion";
import {
  deleteTransfusion,
  searchTransfusion,
} from "../../actions/transfusions";
import Swal from "sweetalert2";

export const TransfusionTable = ({ setNewTransfusion, setIsNew, setEdit }) => {
  const dispatch = useDispatch();
  const transfusions = useSelector((state) => state.transfusions);
  const openModal = (data, isNew, edit) => {
    dispatch(selectedTransfusionAction(data));
    setIsNew(isNew);
    setEdit(edit);
    setNewTransfusion(true);
  };

  const deleteTransfusionButton = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        actionDelete(id);
      }
    });
  };
  const actionDelete = (id) => {
    deleteTransfusion(id).then((res) => {
      dispatch(searchTransfusion(""));
    });
  };

  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-11">
              <h5 className="card-title">Transfusions</h5>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => openModal({}, true, true)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <table className="table p-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hospital</th>
                <th scope="col">Recipient</th>
                <th scope="col">Transfusion Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {transfusions.map((transfusion) => (
                <tr key={transfusion.id}>
                  <th scope="row">{transfusion.id}</th>
                  <td>{transfusion.hospitalInfo.name}</td>
                  <td>{transfusion.recipientInfo.name}</td>
                  <td>{transfusion.transfusionDate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      onClick={() => openModal(transfusion, false, true)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => deleteTransfusionButton(transfusion.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3"
                      onClick={() => openModal(transfusion, false, false)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
