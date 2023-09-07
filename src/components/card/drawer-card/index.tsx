import React from "react";
import { DrawerCardImage } from "../../../assets";

export default function DrawerCard() {
  return (
    <div
      style={{
        borderRadius: "10px",
        background: `var(--theme-color-success, #00B074)`,
        boxShadow: `0px 15px 20px 0px rgba(70, 6, 81, 0.12)`,
      }}
      className="row m-0 p-0 py-2 my-2 align-items-center mx-1"
    >
     <div className="col-7">
      <text className="drawerCardText">Please, organize your menus through button bellow!</text>
      <button className="drawerCardBtn">+Add Menus</button>
     </div>
     <div className="col-4">
      <img src={DrawerCardImage} style={{width:'70px'}}/>
     </div>
    </div>
  );
}
