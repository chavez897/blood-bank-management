import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  faEdit,
  faTrash,
  faPlus,
  faMagnifyingGlass,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { selectedDonorAction } from "../../actions/selectedDonor";
import { deleteDonor, searchDonors } from "../../actions/donors";

export const DonorTable = ({ setNewDonor, setIsNew, setEdit }) => {
  const dispatch = useDispatch();
  const donors = useSelector((state) => state.donors);
  const bloodOptions = [
    {
      value: "All",
      name: "All",
    },
    {
      value: "A%2b",
      name: "A+",
    },
    {
      value: "A-",
      name: "A-",
    },
    {
      value: "B%2b",
      name: "B+",
    },
    {
      value: "B-",
      name: "B-",
    },
    {
      value: "AB%2b",
      name: "AB+",
    },
    {
      value: "AB-",
      name: "AB-",
    },
    {
      value: "O%2b",
      name: "O+",
    },
    {
      value: "O-",
      name: "O-",
    },
  ];
  const [formValues, handleInputChange] = useForm({
    blood_type: "All",
  });
  const { blood_type } = formValues;
  const openModal = (data, isNew, edit) => {
    dispatch(selectedDonorAction(data));
    setIsNew(isNew);
    setEdit(edit);
    setNewDonor(true);
  };
  const searchDonorsButton = () => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const val = blood_type === "All" ? "" : blood_type;
    dispatch(searchDonors(val)).then(() => {
      Swal.close();
    });
  };

  const deleteDonorButton = (id) => {
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
    deleteDonor(id).then((res) => {
      dispatch(searchDonors(""));
    });
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
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => openModal({}, true, true)}
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
                        value={blood_type}
                        onChange={handleInputChange}
                      >
                        {bloodOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary col-2"
                  onClick={searchDonorsButton}
                >
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
              {donors.map((person) => (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td>{person.phone}</td>
                  <td>{person.email}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      onClick={() => openModal(person, false, true)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => deleteDonorButton(person.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3"
                      onClick={() => openModal(person, false, false)}
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
