import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Popover = () => {
  const [openPopover, setOpenPopover] = useState();
  const PopupRef = useRef(null);
  const PopupRefparent = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleUserClick);
    return () => {
      document.removeEventListener("mousedown", handleUserClick);
    };
  }, []);

  const handleUserClick = (event) => {
    if (
      PopupRef &&
      !PopupRef.current?.contains(event.target) &&
      !PopupRefparent.current?.contains(event.target)
    ) {
      setOpenPopover(false);
    }
  };

  const clickForPopup = () => {
    setOpenPopover(!openPopover);
  };
  return (
    <div>
      <h2>Popover</h2>
      <div className="popover-parent" ref={PopupRefparent}>
        <div onClick={clickForPopup}>Click here</div>
        {openPopover && (
          <div className="popover-child " ref={PopupRef}>
            Click outside anywhere to close the popover
          </div>
        )}
      </div>
    </div>
  );
};

export default Popover;
