import React, { useState } from "react";
import "./Modal.css";

export default function Modal(props) {
 
  return (
    <div className="modal">
          <div  className="overlay" onClick={props.closeHandler}></div>
          <div className="modal-content">
            <h2>{props.title}</h2>
            <p>
              {props.text}
            </p>
            <button className="close-btn hero-btn red-btn" onClick={props.closeHandler}>
              CLOSE
            </button>
          </div>
        </div>
  );
}
