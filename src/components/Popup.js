import React from "react"

import PerformanceList from './PerformanceList.js'

const Popup = props => {
  return(
    <div className="main-container">
      <div className="top-line">
        <h3>You have won tickets to see Taylor Swift!!</h3>
        <button className="close">X</button>
      </div>
      <h6>Please enter your email so we can send you the tickets</h6>
      <form>
        <label>
          <input type='text' placeholder="Your email here"></input>
        </label>
        <input type="button" value="CLAIM YOUR PRIZE!"/>
      </form>
      <PerformanceList />
    </div>
  );
};

export default Popup