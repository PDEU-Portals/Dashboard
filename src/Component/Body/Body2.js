import React from "react";
import styles from "./Body.module.css";

import home from "../assets/home.png"
import job from "../assets/job.png"
import placement from "../assets/placement.png"
import student from "../assets/student.png"
import resume from "../assets/resume.png"
import research from "../assets/research.png"


function Body() {
    return (
      <div className={styles.container}>
        <div className="main_image">
            <img src={home} alt="home" />
        </div>

        <div className={styles.jobboarding}>
          <span className={styles.header}>Job Boarding Page</span>
          <img src={job} alt="rightimage"/>
          <span className={styles.textbox}>hi</span>
          <button>click here</button>
        </div>

        <div className={styles.placementstatistics}>
          <span className={styles.header}>Placement Statistics</span>
          <img src={placement} alt="leftimage"/>
          <span className={styles.textbox}>hi</span>
          <button className={styles.button}>click here</button>
        </div>
        
        <div className={styles.studentrelations}>
          <span className={styles.header}>Student Relations</span>
          <img src={student} alt="rightimage"/>
          <span className={styles.textbox}>hi</span>
          <button className={styles.button}>click here</button>
        </div>

        <div className={styles.buildresume}>
          <span className={styles.header}>Build your Resume</span>
          <img src={resume} alt="leftimage"/>
          <span className={styles.textbox}>hi</span>
          <button className={styles.button}>click here</button>
        </div>
        
        <div className={styles.researchproposal}>
          <span className={styles.header}>Research Proposal</span>
          <img src={research} alt="rightimage"/>
          <span className={styles.textbox}>hi</span>
          <button className={styles.button}>click here</button>
        </div>

      </div>
    );
  }

  export default Body;