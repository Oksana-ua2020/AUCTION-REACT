import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="aside-main">
      <div className="selectQuantityPict">
        <p>Количество изображений</p>
        <p>
          <select id="Quantity" onchange="selectQuantity(value)">
            <option selected value="10">
              10
            </option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </p>
      </div>
    </aside>
  );
}

export default SideBar;
