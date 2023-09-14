// react
import { useContext } from 'react';
import { Link } from "react-router-dom";

// estilos
import styles from "./Step4.module.css";

//components
import Sidebar from "../components/Sidebar";

//context
import { PlanContext } from '../context/PlanContext';

const Step4 = () => {

  const { plan, planPeriod, onlineService, largeStorage, customizableProfile, totalValue } = useContext(PlanContext);

  return (
    <div className="appContainer">
      <div className="sidebarContainer">
        <Sidebar step={"step4"} />
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

            <div className={styles.addOnItem} style={onlineService.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Online service</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${onlineService.value}/mo` : `$${onlineService.value}/yr`}</span>
            </div>

            <div className={styles.addOnItem} style={largeStorage.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Large storage</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${largeStorage.value}/mo` : `$${largeStorage.value}/yr`}</span>
            </div>

            <div className={styles.addOnItem} style={customizableProfile.active ? { display: "flex" } : { display: "none" }}>
              <span className={styles.addOnName}>Customizable profile</span>
              <span className={styles.addOnPrice}>{planPeriod === "Monthly" ? `+$${customizableProfile.value}/mo` : `$${customizableProfile.value}/yr`}</span>
            </div>

          </div>

          <div className={styles.totalValueContainer}>
            <span className={styles.addOnName}>Total ({planPeriod === "Monthly" ? "per month" : "per year"})</span>
            <span className={styles.totalValue}>{planPeriod === "Monthly" ? `+$${totalValue}/mo` : `$${totalValue}/yr`}</span>
          </div>

        </div>
        <nav className="navigationContainer">
          <Link className="link" to={'/step3'}><span className="backBtn">Go Back</span></Link>
          <Link className="link" to={'/thanks'}><button className="confirmBtn">Confirm</button></Link>
        </nav>
      </div>

    </div>
  );
};

export default Step4;