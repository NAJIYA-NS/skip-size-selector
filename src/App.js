import React, { useState } from "react";
import useSkips from "./hooks/useSkips";
import SkipCard from "./components/SkipCard";
import SkipModal from "./components/SkipModal";
import ProgressStepper from "./components/ProgressStepper";
import "./App.css";

function App() {
  const { skips, loading } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState(null);

  return (
    <>
    <ProgressStepper currentStep={3} />
    
    <div className="app-container py-4 d-flex flex-column align-items-center">
    <h2 className="title text-center">Choose Your Perfect Skip Size</h2>
        <p className="subtitle text-center mb-4">
          Select the skip size that best suits your project needs. All skips
          come with a 14‑day hire period.
        </p>

      <div className="skip-grid container">
        {loading ? (
          <p>Loading skips...</p>
        ) : (
          <div className="row">
            {skips.map((skip) => (
              <div className="col-md-4 mb-4" key={skip.id}>
                <SkipCard skip={skip} onSelect={setSelectedSkip} 
                isSelected={selectedSkip?.id === skip.id}/>
              </div>
            ))}
          </div>
        )}
      </div>

      <SkipModal skip={selectedSkip} onClose={() => setSelectedSkip(null)} />
    </div>
    </>
  );
}

export default App;
