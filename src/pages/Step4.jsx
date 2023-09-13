import styles from "./Step4.module.css";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Step4 = ({plan, planPeriod, onlineService, largeStorage, customizableProfile}) => {
  
  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Finishing up</h1>
          <p className="stepDescription">Double-check everything looks OK before confirming.</p>


          <div className={styles.servicesListContainer}>
            <div>
              <div className={styles.planContainer}>
                <p>
                  {plan.name} ({planPeriod})<br />
                  <Link className={styles.changeLink} to={'/step2'}>Change</Link>
                </p>
                <span>
                  {planPeriod === "Monthly" ? `$${plan.price}/mo` : `$${plan.price}/yr`}
                </span>
              </div>
            </div>

            <div className={styles.addOnItem} style={onlineService.active ? {display:"flex"} : {display:"none"}}>
              <span className={styles.addOnName}>Online service</span>
              <span className={styles.addOnPrice}>+$1/mo</span>
            </div>

            <div className={styles.addOnItem} style={largeStorage.active ? {display:"flex"} : {display:"none"}}>
              <span className={styles.addOnName}>Large storage</span>
              <span className={styles.addOnPrice}>+$2/mo</span>
            </div>

            <div className={styles.addOnItem} style={customizableProfile.active ? {display:"flex"} : {display:"none"}}>
              <span className={styles.addOnName}>Customizable profile</span>
              <span className={styles.addOnPrice}>+$2/mo</span>
            </div>
          </div>

          <div className={styles.totalValueContainer}>
            <span className={styles.addOnName}>Total ({planPeriod === "Monthly" ? "per month" : "per year"})</span>
            {/* <span className={styles.totalValue}>{planPeriod === "Monthly" ? `+$${total}/mo` : `$${total}/yr`}</span> */}
          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step3'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/thanks'}><button className="confirmBtn">Confirm</button></Link>
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