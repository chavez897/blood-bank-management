import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import {
  createTransfusion,
  searchTransfusion,
  updateTransfusion,
} from "../../actions/transfusions";
import { searchBloodBank } from "../../actions/bloodBank";

export const TransfusionModal = ({ setNewTransfusion, isNew, edit }) => {
  const dispatch = useDispatch();
  const [transfusionDate, setTransfusionDate] = useState(new Date());
  const bloodBanks = useSelector((state) => state.bloodBank);
  const doctors = useSelector((state) => state.doctors);
  const recipients = useSelector((state) => state.recipients);
  const hospitals = useSelector((state) => state.hospitals);
  const selectedTransfusion = useSelector((state) => state.selectedTransfusion);
  const [formValues, handleInputChange] = useForm({
    id: isNew ? "" : selectedTransfusion.id,
    doctor: isNew ? "" : selectedTransfusion.user,
    hospital: isNew ? "" : selectedTransfusion.hospital,
    recipient: isNew ? "" : selectedTransfusion.recipient,
    bloodBank: isNew ? "" : selectedTransfusion.blood,
    totalVolume: isNew ? "" : selectedTransfusion.volume,
  });

  useEffect(() => {
    if (!isNew) {
      const date = new Date(selectedTransfusion.transfusionDate);
      date.setDate(date.getDate() + 1);
      setTransfusionDate(date);
    }
  }, []);
  const { id, doctor, hospital, recipient, bloodBank, totalVolume } =
    formValues;

  useEffect(() => {
    if (recipient !== "") {
      const result = recipients.find((element) => element.id == recipient);
      dispatch(searchBloodBank(result.bloodGroup));
    }
  }, [recipient]);

  const handleSubmit = () => {
    const data = {
      user: doctor,
      hospital: hospital,
      recipient: recipient,
      blood: bloodBank,
      transfusionDate:
        transfusionDate.getFullYear() +
        "-" +
        (transfusionDate.getMonth() + 1) +
        "-" +
        transfusionDate.getDate(),
      volume: totalVolume,
    };
    if (isNew) {
      createTransfusion(data)
        .then((res) => {
          dispatch(searchTransfusion(""));
          setNewTransfusion(false);
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
      updateTransfusion(data, selectedTransfusion.id)
        .then((res) => {
          dispatch(searchTransfusion(""));
          setNewTransfusion(false);
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
                    disabled={true}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Doctor:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="doctor"
                      value={doctor}
                      onChange={handleInputChange}
                      disabled={!edit}
                    >
                      <option>Choose...</option>
                      {doctors.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
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
                      name="hospital"
                      value={hospital}
                      onChange={handleInputChange}
                      disabled={!edit}
                    >
                      <option>Choose...</option>
                      {hospitals.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
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
                      name="recipient"
                      value={recipient}
                      onChange={handleInputChange}
                      disabled={!edit}
                    >
                      <option value="">Choose...</option>
                      {recipients.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.name}
                        </option>
                      ))}
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
                      name="bloodBank"
                      value={bloodBank}
                      onChange={handleInputChange}
                      disabled={!edit}
                    >
                      <option>Choose...</option>
                      {bloodBanks.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.bloodGroup}, {option.donorInfo.name}
                        </option>
                      ))}
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
                    disabled={!edit}
                    selected={transfusionDate}
                    onChange={(transfusionDate) =>
                      setTransfusionDate(transfusionDate)
                    }
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
                    disabled={!edit}
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
                onClick={() => setNewTransfusion(false)}
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
