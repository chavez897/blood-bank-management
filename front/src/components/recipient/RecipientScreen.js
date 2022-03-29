import React, { useState } from "react";
import { RecipientTable } from "./RecipientTable";
import { RecipientModal } from "./RecipientModal";

export const RecipientScreen = () => {
  const [newRecipient, setNewRecipient] = useState(false);
  const [isNew, setIsNew] = useState(false);
  return (
    <div className="container vh-100 d-flex justify-content-center mt-5">
      {newRecipient ? <RecipientModal setNewRecipient={setNewRecipient} isNew={isNew}/> : null}
      <div className="row w-100">
        <div className="w-80">
          <RecipientTable setNewRecipient={setNewRecipient} setIsNew={setIsNew} />
        </div>
      </div>
    </div>
  );
};
