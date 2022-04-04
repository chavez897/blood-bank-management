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
import { selectedRecipientAction } from "../../actions/selectedRecipient";
import { deleteRecipient, searchRecipients } from "../../actions/recipients";

export const RecipientTable = ({ setNewRecipient, setIsNew, setEdit }) => {
  const dispatch = useDispatch();
  const recipients = useSelector((state) => state.recipients);
  const openModal = (data, isNew, edit) => {
    dispatch(selectedRecipientAction(data));
    setIsNew(isNew);
    setEdit(edit);
    setNewRecipient(true);
  };
  const [formValues, handleInputChange] = useForm({
    name: "",
  });
  const { name } = formValues;
  const searchRecipientsButton = () => {
    Swal.fire({
      title: "Loading...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
    dispatch(searchRecipients(name)).then(() => {
      Swal.close();
    });
  };

  const deleteRecipientButton = (id) => {
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
    deleteRecipient(id).then((res) => {
      dispatch(searchRecipients(""));
    });
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
                onClick={() => openModal({}, true, true)}
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
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
                <button type="button" className="btn btn-outline-primary" onClick={searchRecipientsButton}>
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
              {recipients.map((person) => (
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
                      onClick={() => deleteRecipientButton(person.id)}
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
