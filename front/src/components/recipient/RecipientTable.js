import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export const RecipientTable = ({ setNewRecipient }) => {
  const persons = [
    {
      id: 1,
      name: "Mark",
      lastname: "Otto",
      email: "marko@gmail.com",
    },
    {
      id: 2,
      name: "John",
      lastname: "Smith",
      email: "johns@gmail.com",
    },
    {
      id: 3,
      name: "Larry",
      lastname: "Thompson",
      email: "larryt@gmail.com",
    },
  ];
  const openModal = () => {
    setNewRecipient(true);
  };
  return (
    <>
      <div className="card w-100">
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <h5 className="card-title">Recipients</h5>
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
            <div className="col-4">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <button type="button" className="btn btn-outline-primary">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </div>
          <table className="table p-5">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td>{person.lastname}</td>
                  <td>{person.email}</td>
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
