import styles from "./Step3.module.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Step3 = () => {
  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Pick add-ons</h1>
          <p className="stepDescription">Add-ons help enhance your gaming experience.</p>


        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step2'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/step4'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </div>
  )
}

export default Step3;


// <!-- Step 3 start -->

// Pick add-ons
// Add-ons help enhance your gaming experience.

// Online service
// Access to multiplayer games
// +$1/mo

// Larger storage
// Extra 1TB of cloud save
// +$2/mo

// Customizable Profile
// Custom theme on your profile
// +$2/mo

// Go Back
// Next Step

// <!-- Step 3 end -->