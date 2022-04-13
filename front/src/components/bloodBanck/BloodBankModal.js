import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { createBloodBank, searchBloodBank, updateBloodBank } from "../../actions/bloodBank";

export const BloodBankModal = ({ setNewStock, isNew, edit }) => {
  const dispatch = useDispatch();
  const selectedBloodBank = useSelector((state) => state.selectedBloodBank);
  const [collectionDate, setCollectionDate] = useState(new Date());
  const [expiracyDate, setExpiracyDate] = useState(new Date());
  const [bloodType, setBloodType] = useState(isNew ? "" : selectedBloodBank.bloodGroup);
  const [formValues, handleInputChange] = useForm({
    id: isNew ? "" : selectedBloodBank.id,
    donorId: isNew ? "" : selectedBloodBank.donor,
    totalVolume: isNew ? "" : selectedBloodBank.totalVolume,
  });
  const { id, donorId, totalVolume } = formValues;
  const donors = useSelector((state) => state.donors);
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
  useEffect(() => {
    const selected = donors.find((element) => element.id == donorId);
    if (selected) {
      setBloodType(selected.bloodGroup);
    } else {
      setBloodType("");
    }
  }, [donorId]);
  useEffect(() => {
    if (!isNew) {
      const collection = new Date(selectedBloodBank.collectionDate);
      collection.setDate(collection.getDate() + 1);
      setCollectionDate(collection);

      const exp = new Date(selectedBloodBank.expiryDate);
      exp.setDate(exp.getDate() + 1);
      setExpiracyDate(exp);
    }
  }, []);
  const handleSubmit = () => {
    if (totalVolume < 1) {
      Swal.fire({
        title: "Error",
        text: "invalid volume",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return
    }
    const data = {
      blood_group: bloodType,
      donor: donorId,
      collectionDate:
        collectionDate.getFullYear() +
        "-" +
        (collectionDate.getMonth() + 1) +
        "-" +
        collectionDate.getDate(),
      expiryDate:
        expiracyDate.getFullYear() +
        "-" +
        (expiracyDate.getMonth() + 1) +
        "-" +
        expiracyDate.getDate(),
      totalVolume: totalVolume,
    };
    if (isNew) {
      createBloodBank(data)
        .then((res) => {
          dispatch(searchBloodBank(""));
          setNewStock(false);
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
      updateBloodBank(data, selectedBloodBank.id)
        .then((res) => {
          dispatch(searchBloodBank(""));
          setNewStock(false);
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
            <h5 className="modal-title">Blood Bank</h5>
            <FontAwesomeIcon
              icon={faClose}
              className="btn"
              onClick={() => setNewStock(false)}
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
                  <label className="form-label">Blood Type:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      name="bloodGroup"
                      value={bloodType}
                      onChange={setBloodType}
                      disabled={true}
                    >
                      <option></option>
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
                  <label className="form-label">Donor:</label>
                  <div className="input-group mb-3">
                    <select
                      className="form-control form-control-lg"
                      placeholder="Select a donor"
                      name="donorId"
                      value={donorId}
                      onChange={handleInputChange}
                      disabled={!edit}
                    >
                      <option></option>
                      {donors.map((option) => (
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
                  <label className="form-label">Collection Date:</label>
                  <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    yearItemNumber={20}
                    selected={collectionDate}
                    onChange={(collectionDate) =>
                      setCollectionDate(collectionDate)
                    }
                    customInput={
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    }
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Expiracy Date:</label>
                  <DatePicker
                    showYearDropdown
                    showMonthDropdown
                    yearItemNumber={20}
                    selected={expiracyDate}
                    onChange={(expiracyDate) => setExpiracyDate(expiracyDate)}
                    customInput={
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    }
                    disabled={!edit}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-outline mb-4">
                  <label className="form-label">Total volume:</label>
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
                onClick={() => setNewStock(false)}
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
