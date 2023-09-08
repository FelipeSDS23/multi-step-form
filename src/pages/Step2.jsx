// react
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step2.module.css";

//components
import Sidebar from "../components/Sidebar";

// imagens
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"

const Step2 = ({plan, setPlan, planPeriod, setPlanPeriod}) => {

  // CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO
  const showHideErrorMsg = () => {

  }
  // FIM DAS CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO
  

  //INICIO DAS CONFIGURAÇÕES DO PERIODO DO PLANO
  const inputCheckbox = useRef();
  const monthlyDisplay = useRef();
  const yearlyDisplay = useRef();

  const changePlanPeriod = () => {
    if (inputCheckbox.current.checked) {
      setPlanPeriod("Yearly")
      setPlan((prev) => ({name: prev.name, price: prev.price * 10}))
      monthlyDisplay.current.classList.add("disable")
      yearlyDisplay.current.classList.add("active")
    } else {
      setPlanPeriod("Monthly")
      setPlan((prev) => ({name: prev.name, price: prev.price / 10}))
      monthlyDisplay.current.classList.add("active")
      yearlyDisplay.current.classList.add("disable")
    }
  }
  //FIM DAS CONFIGURAÇÕES DO PERIDO DO PLANO

  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Select your plan</h1>
          <p className="stepDescription">You have the option of monthly or yearly billing.</p>

          <div className={styles.planContainer}>
            <button className={styles.plansCards} onClick={() => setPlan({name: "Arcade", price: (planPeriod === "Monthly" ? 9 : 90)})} style={plan.name === "Arcade" ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div>
                <img src={arcadeIcon} alt="arcade" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Arcade</span><br />
                <span className={styles.planPrice}>$9/mo</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>
            <button className={styles.plansCards} onClick={() => setPlan({name: "Advanced", price: (planPeriod === "Monthly" ? 12 : 120)})} style={plan.name === "Advanced" ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div>
                <img src={advancedIcon} alt="advanced" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Advanced</span><br />
                <span className={styles.planPrice}>$12/mo</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>
            <button className={styles.plansCards} onClick={() => setPlan({name: "Pro", price: (planPeriod === "Monthly" ? 15 : 150)})} style={plan.name === "Pro" ? {border: "2px solid var(--Purplish-blue)"} : {border: "2px solid var(--Light-gray)"}}>
              <div>
                <img src={proIcon} alt="pro" />
              </div>
              <div className={styles.planPriceContainer}>
                <span className={styles.planName}>Pro</span><br />
                <span className={styles.planPrice}>$15/mo</span><br />
                <span className={planPeriod === "Yearly" ? styles.freeMonths : styles.hide}>2 months free</span>
              </div>
            </button>
          </div>

          <div className={styles.planPeriodContainer}>
            <span className={planPeriod === "Monthly" ? styles.active : styles.disable} ref={monthlyDisplay}>Monthly</span>

            {/* inicio button */}
            <div className={styles.buttonContainer}>
              <label>
                <input type="checkbox" className={styles.toggleInput} onChange={changePlanPeriod} ref={inputCheckbox} checked={(planPeriod === "Yearly") ? true : false}/>
                <div className={styles.slider}>
                  <button className={styles.button}>

                  </button>
                </div>
              </label>
            </div>
            {/* fim button */}

            <span className={planPeriod === "Yearly" ? styles.active : styles.disable} ref={yearlyDisplay}>Yearly</span>
          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/'}><span className="backBtn">Go Back</span></Link>
          <Link onClick={showHideErrorMsg} className="link" to={(name && email && phone) ? '/step2' : '/'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </div>
  )
}

export default Step2;


// <!-- Step 2 start -->

// Select your plan
// You have the option of monthly or yearly billing.

// Arcade
// $9/mo

// Advanced
// $12/mo

// Pro
// $15/mo

// Monthly
// Yearly

// Go Back
// Next Step

// <!-- Step 2 end -->