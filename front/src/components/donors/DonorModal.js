import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClose
  } from "@fortawesome/free-solid-svg-icons";

export const DonorModal = () => {
  return (
    <div className="d-block modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <FontAwesomeIcon icon={faClose} className="btn" />
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
