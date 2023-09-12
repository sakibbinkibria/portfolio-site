import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import '../styles.css';

const ImageModal = ({ show, handleClose, imageUrl }) => {
  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="modal-lg">
      <img
        src={imageUrl}
        alt="Fullscreen Image"
        style={{ objectFit: "contain" }}
      />
    </Modal>
  );
};

export default ImageModal;
