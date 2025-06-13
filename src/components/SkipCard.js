// src/components/SkipCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Truck, Clock } from "react-bootstrap-icons";

const SkipCard = ({ skip, onSelect, isSelected}) => {
    return (
        <Card className="card h-100 shadow-sm border-0">
            <div
                className="card-header position-relative d-flex justify-content-center align-items-center"
                style={{
                    height: "200px",
                    background: "linear-gradient(to bottom right, #fef3c7, #fde68a)",
                }}
            >
                <Truck size={72} color="#b45309" />
                <div className="badge bg-dark text-white rounded-pill position-absolute top-0 end-0 m-2">
                    {skip.size} Yards
                </div>
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bold fs-5 mb-0">{skip.name}</h5>
                        <h5 className="fw-bold fs-5 mb-0" style={{
                            background: "linear-gradient(to right, #3b82f6, #60a5fa)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            €{skip.price}
                        </h5>
                    </div>

                    <div className="d-flex align-items-center text-muted mb-2" style={{ fontSize: "0.95rem" }}>
                        <Clock size={16} className="me-2" />
                        <span>{skip.hirePeriod}</span>
                    </div>

                    <p className="mb-2" style={{ fontSize: "0.95rem", color: "#4b5563" }}>
                        <strong>Dimensions:</strong> {skip.dimensions}
                    </p>

                    <p className="mb-2" style={{ fontSize: "0.95rem", color: "#4b5563" }}>
                        <strong>Suitable for:</strong> {skip.suitableFor}
                    </p>
                </div>

                <Button variant="primary"  className={`w-100 mt-3 ${
            isSelected ? "btn-gradient-green" : "btn-gradient"
          }`} onClick={() => onSelect(skip)}>
                    Select This Skip
                </Button>
            </Card.Body>

        </Card>
    );
};

export default SkipCard;
