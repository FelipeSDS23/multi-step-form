import styles from "./Step3.module.css";
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

//font awesome
import { FaCheckSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const Step3 = ({onlineService, setOnlineService, largeStorage, setLargeStorage, customizableProfile, setCustomizableProfile, plan, setTotalValue}) => {

  const calcTotalValue = () => {
    setTotalValue(0)
    onlineService.active ? setTotalValue((prev) => prev + onlineService.value): setTotalValue((prev) => prev + 0)
    largeStorage.active ? setTotalValue((prev) => prev + largeStorage.value): setTotalValue((prev) => prev + 0)
    customizableProfile.active ? setTotalValue((prev) => prev + customizableProfile.value): setTotalValue((prev) => prev + 0)
    setTotalValue((prev) => prev + plan.price);
  }

  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Pick add-ons</h1>
          <p className="stepDescription">Add-ons help enhance your gaming experience.</p>


          <div className={styles.addOnsContainer}>

            <label className={styles.addOnsBtns} style={onlineService.active ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setOnlineService((prev) => ({active: !prev.active, value: prev.value}))} />

                {onlineService.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}
                
                <p><span className={styles.addOnName}>Online service</span><br />Access to multiplayer games</p>
              </div>
              <span className={styles.addOnPrice}>+$1/mo</span>
            </label>

            <label className={styles.addOnsBtns} style={largeStorage.active ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setLargeStorage((prev) => ({active: !prev.active, value: prev.value}))} />

                {largeStorage.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}

                <p><span className={styles.addOnName}>Larger storage</span><br />Extra 1TB of cloud save</p>
              </div>
              <span className={styles.addOnPrice}>+$2/mo</span>
            </label>

            <label className={styles.addOnsBtns} style={customizableProfile.active ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div className={styles.checkboxParagraphContainer}>
                <input type="checkbox" onChange={() => setCustomizableProfile((prev) => ({active: !prev.active, value: prev.value}))} />

                {customizableProfile.active ? (<FaCheckSquare className={styles.customCheckbox}/>) : (<FaSquare className={styles.customCheckbox}/>)}

                <p><span className={styles.addOnName}>Customizable Profile</span><br />Custom theme on your profile</p>
              </div>
              <span className={styles.addOnPrice}>+$2/mo</span>
            </label>

          </div>


        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step2'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/step4'}><button className="nextBtn" onClick={calcTotalValue}>Next Step</button></Link>
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