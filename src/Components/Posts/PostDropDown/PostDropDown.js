import React, { useState } from "react";
import "./PostDropDown.css";

const PostDropDown = () => {
  const [openList, setOpenList] = useState(false);
  return (
    <div className="dropdown-container">
      <div
        className=" drop-down-btn"
        onClick={() => {
          setOpenList(!openList);
        }}
      >
        {/* <i className="fa fa-ellipsis-h"></i> */}
      </div>{" "}
      <div className={`dropdown  ${openList ? "" : "d-none"} `}>
        <ul>
          <li>
            <span>Edit</span>
          </li>
          <li>
            <span>Report</span>
          </li>
          <li>
            <span>Option</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostDropDown;
