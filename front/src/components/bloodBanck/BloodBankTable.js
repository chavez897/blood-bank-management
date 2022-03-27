import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export const BloodBankTable = ({ setNewStock }) => {
  const stocks = [
    {
      id: 1,
      type: "A",
      donor: "John",
      collectionDate: "03-27-2022",
    },
    {
      id: 2,
      type: "B",
      donor: "Mark",
      collectionDate: "03-20-2022",
    },
  ];
  const openModal = () => {
    setNewStock(true);
  };
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-11">
              <h5 className="card-title">Blood Bank</h5>
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
                <th scope="col">Blood Type</th>
                <th scope="col">Donor</th>
                <th scope="col">Collection Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((blood) => (
                <tr key={blood.id}>
                  <th scope="row">{blood.id}</th>
                  <td>{blood.type}</td>
                  <td>{blood.donor}</td>
                  <td>{blood.collectionDate}</td>
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
