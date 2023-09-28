import React from "react";
import { useState } from "react";
const images = [
  "https://images.unsplash.com/photo-1646029642262-022158ff5794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1608341089966-92c09e62214f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
  "https://plus.unsplash.com/premium_photo-1688700437975-0ea63cfa59e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1554200876-907f9286c2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1688488994192-e55620dfe5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
];
const Carousal = () => {
  const [carousalIndex, setCarousalIndex] = useState(0);
  const backButtonClick = () => {
    setCarousalIndex((prev) => prev - 1);
  };
  const nextButtonClick = () => {
    setCarousalIndex((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Carousal Page</h1>
      <div className="carousal-page">
        <img src={images[carousalIndex]} />
        <button
          className="button-left"
          disabled={carousalIndex === 0}
          onClick={backButtonClick}
        >
          {"<-"}
        </button>
        <button
          className="button-right"
          onClick={nextButtonClick}
          disabled={carousalIndex === images.length - 1}
        >
          {"->"}
        </button>
      </div>
    </div>
  );
};

export default Carousal;
