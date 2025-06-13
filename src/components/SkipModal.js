// src/components/SkipModal.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Truck, Clock } from "react-bootstrap-icons";

const SkipModal = ({ skip, onClose }) => {
    if (!skip) return null;

    return (
        <Modal show centered onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{skip.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="text-center mb-3">
                    <Truck size={60} color="#f59e0b" />
                    <h5>{skip.size} Yard Skip</h5>
                    <p className="fs-5 fw-bold">€{skip.price}</p>
                    <div className="d-flex justify-content-center align-items-center text-muted mb-3">
                        <Clock size={16} className="me-1" />
                        <small>{skip.hirePeriod}</small>
                    </div>
                </div>
                <div className="m-2 text-center">
                    <p><strong>Dimensions:</strong> {skip.dimensions}</p>
                    <p><strong>Suitable for:</strong> {skip.suitableFor}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button className="btn-gradient" onClick={onClose}>
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default SkipModal;
