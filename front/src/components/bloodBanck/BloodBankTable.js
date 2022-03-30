import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faEye,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const BloodBankTable = ({ setNewStock, setIsNew }) => {
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
  const openModal = (isNew) => {
    setNewStock(true);
    setIsNew(isNew)
  };
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5 className="card-title">Blood Bank</h5>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => openModal(true)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="col-5">
              <div className="row">
                <div className="col-3">
                  <label className="form-label mt-2">Blood Type:</label>
                </div>
                <div className="col-6">
                  <div className="form-outline">
                    <div className="input-group">
                      <select
                        className="form-control form-control-lg"
                        name="blood_type"
                      >
                        <option>All</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn btn-outline-primary col-2">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
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
                      onClick={() => openModal(false)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button type="button" className="btn btn-outline-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3"
                      onClick={() => openModal(false)}
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
