import React from 'react'
import "./Subheader.css";
import PinDropIcon from '@material-ui/icons/PinDrop';

function Subheader() {
  return (
    <div className="subheader">
        <PinDropIcon className="subheader__locIcon" />

      <div className="subheader__deliver">
        <span className="subheader__optionLineOne">Deliver to </span>
        <span className="subheader__optionLineTwo">Switzerland</span>
      </div>

      <div className="subheader__nav">
        <div className="today">Today's Deals</div>
        <div className="customer">customer Service</div>
        <div className="gift">Gift Cards</div>
        <div className="reg">Registry</div>
        <div className="sell">Sell</div>
      </div>  
      <div className="subheader__covid">Amazon's response to COVID-19</div>
    </div>
  )
}

export default Subheader
