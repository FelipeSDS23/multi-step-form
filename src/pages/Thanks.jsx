import styles from "./Thanks.module.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Thanks = () => {
  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">
          <h1>THANKS</h1>
        </div>
        <div className="navigationContainer">
          <button><Link to={'/step4'}>Prev</Link></button>
        </div>
      </div>

    </div>
  )
}

export default Thanks;