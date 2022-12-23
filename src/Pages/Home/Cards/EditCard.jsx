import React from 'react';
import EditCardForm from '../../../components/Card/EditCardForm';

const EditCard = () => (
  <div>
    <div className="modal modal-open">
      <div className="modal-box">
        <div className="py-4">
          <EditCardForm />
        </div>
      </div>
    </div>
  </div>
);

export default EditCard;
