import React, { useState } from "react";

const AccordionItem = (props) => {
  const { title, content } = props;
  const [active, setActive] = useState(false);
  return (
    <div className="accordion">
      <div
        className="accordion-title"
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="accordion-text">{title}</div>
        <div className="accordion-action">{active ? "-" : "+"}</div>
      </div>
      {active && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
