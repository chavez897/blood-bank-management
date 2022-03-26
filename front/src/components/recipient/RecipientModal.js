import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const RecipientModal = ({ setNewRecipient, isNew }) => {
  const dispatch = useDispatch();
  const [birthdate, setBirthdate] = useState(new Date());
  const [formValues, handleInputChange] = useForm({
    id: "",
    name: "",
    address: "",
    phone: "",
    gender: "",
    email: "",
    diseases: "",
    donation_count: "",
    blood_type: "1"
  });

  const {
    id,
    name,
    address,
    phone,
    gender,
    email,
    diseases,
    donation_count,
    blood_type
  } = formValues;
  const handleSubmit = () => {
    console.log(formValues)
    console.log(birthdate)
  }
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
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
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
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 pl-4">
                <div className="form-outline mb-4">
                  <label className="form-label">Blood Type:</label>
                  <div className="input-group mb-3">
                    <select className="form-control form-control-lg" name="blood_type" value={blood_type} onChange={handleInputChange}>
                      <option>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Donation Count:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="donation_count"
                    value={donation_count}
                    onChange={handleInputChange}
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
                    rows="3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" onClick={handleSubmit}>
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
        </div>
      </div>
    </div>
  );
};
