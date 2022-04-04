import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import {
  createRecipients,
  searchRecipients,
  updateRecipients,
} from "../../actions/recipients";

export const RecipientModal = ({ setNewRecipient, isNew, edit }) => {
  const dispatch = useDispatch();
  const [birthdate, setBirthdate] = useState(new Date());
  const selectedRecipient = useSelector((state) => state.selectedRecipient);
  const [formValues, handleInputChange] = useForm({
    id: isNew ? "" : selectedRecipient.id,
    name: isNew ? "" : selectedRecipient.name,
    address: isNew ? "" : selectedRecipient.address,
    phone: isNew ? "" : selectedRecipient.phone,
    gender: isNew ? "" : selectedRecipient.gender,
    email: isNew ? "" : selectedRecipient.email,
    diseases: isNew ? "" : selectedRecipient.diseases,
    blood_type: isNew ? "A+" : selectedRecipient.bloodGroup,
  });

  useEffect(() => {
    if (!isNew) {
      const dob = new Date(selectedRecipient.dob);
      dob.setDate(dob.getDate() + 1);
      setBirthdate(dob);
    }
  }, []);

  const bloodOptions = [
    {
      value: "A+",
      name: "A+",
    },
    {
      value: "A-",
      name: "A-",
    },
    {
      value: "B+",
      name: "B+",
    },
    {
      value: "B-",
      name: "B-",
    },
    {
      value: "AB+",
      name: "AB+",
    },
    {
      value: "AB-",
      name: "AB-",
    },
    {
      value: "O+",
      name: "O+",
    },
    {
      value: "O-",
      name: "O-",
    },
  ];

  const { id, name, address, phone, gender, email, diseases, blood_type } =
    formValues;

  const handleSubmit = () => {
    const data = {
      name: name,
      dob:
        birthdate.getFullYear() +
        "-" +
        (birthdate.getMonth() + 1) +
        "-" +
        birthdate.getDate(),
      gender: gender,
      blood_group: blood_type,
      address: address,
      phone: phone,
      email: email,
      diseases: diseases,
    };
    if (isNew) {
      createRecipients(data)
        .then((res) => {
          dispatch(searchRecipients(""));
          setNewRecipient(false);
        })
        .catch((error) => {
          Swal.close();
          const message =
            error.length <= 0
              ? "Error please try again"
              : error[0].field + ": " + error[0].message;
          Swal.fire({
            title: "Error",
            text: message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else {
      updateRecipients(data, selectedRecipient.id)
        .then((res) => {
          dispatch(searchRecipients(""));
          setNewRecipient(false);
        })
        .catch((error) => {
          Swal.close();
          const message =
            error.length <= 0
              ? "Error please try again"
              : error[0].field + ": " + error[0].message;
          Swal.fire({
            title: "Error",
            text: message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };
  return (
    <div className="d-block modal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Recipient</h5>
            <FontAwesomeIcon
              icon={faClose}
              className="btn"
              onClick={() => setNewRecipient(false)}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">ID:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Birthdate:</label>
                  <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    yearItemNumber={20}
                    selected={birthdate}
                    onChange={(birthdate) => setBirthdate(birthdate)}
                    disabled={!edit}
                    customInput={
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    }
                  />
                </div>
              </div>
              <div className="col-1">
                <div className="form-outline mb-4">
                  <label className="form-label">Gender:</label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="M"
                      checked={gender === "M"}
                      onChange={handleInputChange}
                      disabled={!edit}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="F"
                      checked={gender === "F"}
                      onChange={handleInputChange}
                      disabled={!edit}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 pl-4">
                <div className="form-outline mb-4">
                  <label className="form-label">Blood Type:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="blood_type"
                      value={blood_type}
                      onChange={handleInputChange}
                      disabled={!edit}
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
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Address:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="address"
                    value={address}
                    onChange={handleInputChange}
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Phone:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">email:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-outline mb-4">
                  <label className="form-label">Diseases:</label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg"
                    name="diseases"
                    value={diseases}
                    onChange={handleInputChange}
                    disabled={!edit}
                    rows="3"
                  />
                </div>
              </div>
            </div>
          </div>
          {edit ? (
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setNewRecipient(false)}
              >
                Close
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
