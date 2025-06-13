import React from "react";
import "./ProgressStepper.css";
import {
  MapPin,
  Truck,
  Calendar,
  CreditCard,
  CheckCircle,
  Trash2,
} from "lucide-react";

const ProgressStepper = ({ currentStep = 3 }) => {
  const steps = [
    { title: "Postcode", icon: MapPin },
    { title: "Waste Type", icon: Trash2 },
    { title: "Select Skip", icon: Truck },
    { title: "Choose Date", icon: Calendar },
    { title: "Payment", icon: CreditCard },
  ];

  return (
    <div className="stepper-fullwidth">
      <div className="stepper-gradient-overlay py-3 px-3">
        <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index + 1 < currentStep;
            const isCurrent = index + 1 === currentStep;

            return (
              <React.Fragment key={index}>
                <div className="stepper-step text-center flex-grow-1">
                  <div
                    className={`step-icon ${
                      isCompleted
                        ? "completed"
                        : isCurrent
                        ? "current"
                        : "upcoming"
                    }`}
                  >
                    <button className="icon-button" type="button">
                      {isCompleted ? (
                        <CheckCircle size={20} className="text-white" />
                      ) : (
                        <Icon
                          size={20}
                          className={
                            isCurrent ? "text-white" : "text-muted"
                          }
                        />
                      )}
                    </button>
                  </div>
                  <div
                    className={`step-label ${
                      isCurrent ? "text-primary fw-semibold" : ""
                    }`}
                  >
                    {step.title}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`flex-grow-1 step-line mx-1 ${
                      isCompleted ? "bg-success" : "bg-light"
                    }`}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
