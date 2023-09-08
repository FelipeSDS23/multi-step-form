// react
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step1.module.css";

//components
import Sidebar from "../components/Sidebar";

const Step1 = ({ name, setName, email, setEmail, phone, setPhone }) => {

  // CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO
  const nameErrorMsg = useRef();
  const emailErrorMsg = useRef();
  const phoneErrorMsg = useRef();

  const showHideErrorMsg = () => {
    !name ? nameErrorMsg.current.style.display = "block" : nameErrorMsg.current.style.display = "none"
    !email ? emailErrorMsg.current.style.display = "block" : emailErrorMsg.current.style.display = "none"
    !phone ? phoneErrorMsg.current.style.display = "block" : phoneErrorMsg.current.style.display = "none"
  }
  // FIM DAS CONFIGURAÇÕES DE ERRO DE PREENCHIMENTO

  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar />
      </div>

      <div className="rightAppContainer">
        <div className="stepContainer">


          <h1 className="title">Personal info</h1>
          <p className="stepDescription">Please provide your name, email address, and phone number.</p>

          <form>
            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Name</span>
                  <span className={styles.errorMsg} ref={nameErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} type="text" name="name" id="name" placeholder="e.g. Stephen King" onChange={(e) => setName(e.target.value)} value={name} />
              </label>
            </div>
            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Email Address</span>
                  <span className={styles.errorMsg} ref={emailErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com" onChange={(e) => setEmail(e.target.value)} value={email} />
              </label>
            </div>
            <div className={styles.labelInputContainer}>
              <label className={styles.label}>
                <div className={styles.labelErrorContainer}>
                  <span>Phone Number</span>
                  <span className={styles.errorMsg} ref={phoneErrorMsg}>This field is required</span>
                </div>
                <input className={styles.input} type="text" name="phone" id="phone" placeholder="e.g. +1 234 567 890" onChange={(e) => setPhone(e.target.value)} value={phone} />
              </label>
            </div>
          </form>

        </div>
        <nav className="navigationContainer">
          <div></div>
          <Link onClick={showHideErrorMsg} className="link" to={(name && email && phone) ? '/step2' : '/'}><button className="nextBtn">Next Step</button></Link>
        </nav>
      </div>

    </div>
  )
}

export default Step1;

// <!-- Step 1 start -->

// Personal info
// Please provide your name, email address, and phone number.

// Name
// e.g. Stephen King

// Email Address
// e.g. stephenking@lorem.com

// Phone Number
// e.g. +1 234 567 890

// Next Step

// <!-- Step 1 end -->