import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export const TransfusionTable = ({ setNewTransfusion }) => {
  const transfusions = [
    {
      id: 1,
      doctorId: "John",
      hospital: "hospital",
      recepientId: "Mark",
      blood: "John",
      volume: "5",
      transfusionDate: "03-27-2022",
    },
  ];
  const openModal = () => {
    setNewTransfusion(true);
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
                onClick={openModal}
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
                  <td>{transfusion.hospital}</td>
                  <td>{transfusion.recepientId}</td>
                  <td>{transfusion.transfusionDate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      onClick={openModal}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3"
                      onClick={openModal}
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
