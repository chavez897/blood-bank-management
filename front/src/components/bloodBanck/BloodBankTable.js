import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import {
  faEdit,
  faTrash,
  faPlus,
  faEye,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { deleteBloodBank, searchBloodBank } from "../../actions/bloodBank";
import { selectedBloodBankAction } from "../../actions/selectedBloodBank";

export const BloodBankTable = ({ setNewStock, setIsNew, setEdit }) => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.bloodBank);
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
    dispatch(selectedBloodBankAction(data));
    setIsNew(isNew);
    setEdit(edit);
    setNewStock(true);
  };
  const searchBloodBankButton = () => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const val = blood_type === "All" ? "" : blood_type;
    dispatch(searchBloodBank(val)).then(() => {
      Swal.close();
    });
  };

  const deleteBloodBankButton = (id) => {
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
    deleteBloodBank(id).then((res) => {
      dispatch(searchBloodBank(""));
    });
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
                  onClick={searchBloodBankButton}
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
                  <td>{blood.bloodGroup}</td>
                  <td>{blood.donorInfo.name}</td>
                  <td>{blood.collectionDate}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-3"
                      onClick={() => openModal(blood, false, true)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => deleteBloodBankButton(blood.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-success mx-3"
                      onClick={() => openModal(blood, false, false)}
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
