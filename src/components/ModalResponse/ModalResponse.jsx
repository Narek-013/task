import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalWindow, selectModal } from "../../store/slices/modalSlice/modalSlice";
import "./modal.scss";

const ModalResponse = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch()

  const closeModal = (ev) => {
      if(ev.target === ev.currentTarget) {
        dispatch(closeModalWindow());
    }
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__window">
        <h1>Response</h1>
        <div className="modal__response">
          <p>{modal.modalResponse}</p>
        </div>
        <button className="modal__close" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default ModalResponse;
