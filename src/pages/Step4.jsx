import styles from "./Step4.module.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Step4 = () => {
  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Finishing up</h1>
          <p className="stepDescription">Double-check everything looks OK before confirming.</p>


        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step3'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/step5'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </div>
  )
}

export default Step4;


// <!-- Step 4 start -->

// Finishing up
// Double-check everything looks OK before confirming.

// <!-- Dynamically add subscription and add-on selections here -->

// Total (per month/year)

// Go Back
// Confirm

// <!-- Step 4 end -->