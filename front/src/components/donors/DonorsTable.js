import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faMagnifyingGlass,
  faEye
} from "@fortawesome/free-solid-svg-icons";

export const DonorTable = ({ setNewDonor, setIsNew}) => {
  const persons = [
    {
      id: 1,
      name: "Mark Otto",
      phone: "1111111111",
      email: "marko@gmail.com",
    },
    {
      id: 2,
      name: "John Smith",
      phone: "2222222222",
      email: "johns@gmail.com",
    },
    {
      id: 3,
      name: "Larry Thompson",
      phone: "3333333333",
      email: "larryt@gmail.com",
    },
  ];
  const openModal = (isNew) => {
    setNewDonor(true);
    setIsNew(isNew)
  };
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h5 className="card-title">Donors</h5>
            </div>
            <div className="col-1">
              <button type="button" className="btn btn-outline-success" onClick={() => openModal(true)}>
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
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
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
