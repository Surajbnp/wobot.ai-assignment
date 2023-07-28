import React, { useState } from "react";
import styles from "../styles/onboard.module.css";

const OnboardPage = () => {
  const [selectedDiv, setSelectedDiv] = useState(null); // useState for maintain checkbox

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img
          src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_a61d16e4d0cb57a81127d087676db30c/wobot-intelligence.png"
          alt="logo"
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <div className={styles.logo2}>
            <img
              src="https://miro.medium.com/v2/resize:fit:2400/1*pvhhwM_TxjckFeS74FIVnA.png"
              alt="logo2"
              width={"15%"}
            />
            <p className={styles.boldTxt}>it's a delight to have you onboard</p>
            <div className={styles.smallTxt}>
              <p className={styles.greyTxt}>Help us know you better</p>
              <p className={styles.greyTxt}>
                (This is how we optimize Wobot for your bussiness needs)
              </p>
            </div>
          </div>
          <form>
            <div className={styles.inputDiv}>
              <label>Your name</label>
              <input type="text" placeholder="e.g. John Doe" />
            </div>
            <div className={styles.inputDiv}>
              <label>Company name</label>
              <input type="text" placeholder="e.g. Alpha inc." />
            </div>
            <div className={styles.inputDiv}>
              <label>industry</label>
              <select name="industry" id="">
                <option value="">Select</option>
                <option value="alpha">Alpha Inc</option>
                <option value="tata">Tata</option>
                <option value="google">GOogle</option>
              </select>
            </div>
            <div className={styles.inputDiv}>
              <label>No of locations</label>
              <div className={styles.selectBox}>
                <div
                  className={
                    selectedDiv === 0 ? styles.selected : styles.unselected
                  }
                  onClick={() => handleDivClick(0)}
                >
                  1-20
                </div>
                <div
                  className={
                    selectedDiv === 1 ? styles.selected : styles.unselected
                  }
                  onClick={() => handleDivClick(1)}
                >
                  21-50
                </div>
                <div
                  className={
                    selectedDiv === 2 ? styles.selected : styles.unselected
                  }
                  onClick={() => handleDivClick(2)}
                >
                  51-200
                </div>
                <div
                  className={
                    selectedDiv === 3 ? styles.selected : styles.unselected
                  }
                  onClick={() => handleDivClick(3)}
                >
                  201-500
                </div>
                <div
                  className={
                    selectedDiv === 4 ? styles.selected : styles.unselected
                  }
                  onClick={() => handleDivClick(4)}
                >
                  500+
                </div>
              </div>
            </div>

            <button className={styles.submitBtn} type="submit">
              Get Started
            </button>
          </form>
        </div>
        <div className={styles.termTxt}>Terms of use | Privacy policy</div>
      </div>
    </div>
  );
};

export default OnboardPage;
