import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const TransfusionModal = ({ setNewTransfusion, isNew }) => {
  const dispatch = useDispatch();
  const [collectionDate, setCollectionDate] = useState(new Date());
  const [expiracyDate, setExpiracyDate] = useState(new Date());
  const [formValues, handleInputChange] = useForm({
    id: isNew ? "": "1",
    bloodGroup: isNew ? "": "1",
    donorId: isNew ? "": "1",
    totalVolume: isNew ? "": "3",
  });

  const { id, bloodGroup, donorId, totalVolume } = formValues;
  const handleSubmit = () => {
    console.log(formValues);
    console.log(collectionDate);
    console.log(expiracyDate);
  };
  return (
    <div className="d-block modal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Transfusion</h5>
            <FontAwesomeIcon
              icon={faClose}
              className="btn"
              onClick={() => setNewTransfusion(false)}
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
                  <label className="form-label">Doctor:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="bloodGroup"
                      value={bloodGroup}
                      onChange={handleInputChange}
                    >
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
                  <label className="form-label">Hospital:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="donorId"
                      value={donorId}
                      onChange={handleInputChange}
                    >
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
                  <label className="form-label">Recipient:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="donorId"
                      value={donorId}
                      onChange={handleInputChange}
                    >
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
                  <label className="form-label">Stock:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="donorId"
                      value={donorId}
                      onChange={handleInputChange}
                    >
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
                  <label className="form-label">Transfusion Date:</label>
                  <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    yearItemNumber={20}
                    selected={collectionDate}
                    onChange={(collectionDate) => setCollectionDate(collectionDate)}
                    customInput={
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    }
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Volume:</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="totalVolume"
                    value={totalVolume}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
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
              onClick={() => setNewTransfusion(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
