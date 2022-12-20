import { useState } from "react";
import BookingLayout from "../../layout/bookingLayout";
import StyleSheet from "/styles/pages/tickets.module.scss";

function Camping(props) {
  const allTickets = props.regTickets + props.vipTickets;
  const [copy, setCopy] = useState(allTickets);

  return (
    <>
      <h2>Choose camping options</h2>
      <p>You have {copy} people left</p>
      {props.options.map((option) => {
        return (
          <div className={StyleSheet.card} key={option.name}>
            <div className={StyleSheet.cardText}>
              <h3>{option.name}</h3>
              <p>{option.description}</p>
            </div>
            <div className={StyleSheet.actions}>
              <p className={StyleSheet.price}>{option.price},- DKK</p>
              <div className={StyleSheet.changeNumber}>
                <button
                  className={StyleSheet.button}
                  onClick={() => {
                    if (option.state > 0 && copy < allTickets) {
                      setCopy(copy + option.spot);
                      option.stateHandler(option.state - 1);
                    } else {
                      return;
                    }
                    console.log(copy);
                  }}>
                  -
                </button>
                <span>{option.state}</span>
                <button
                  className={StyleSheet.button}
                  onClick={() => {
                    if (copy - option.spot >= 0) {
                      setCopy(copy - option.spot);
                      option.stateHandler(option.state + 1);
                      // console.log(option.stateHandler);
                    } else {
                      alert("You do not have enough tickets for that option. Try to pick different camping options.");
                      return;
                    }
                  }}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <button className={StyleSheet.continue} onClick={props.statusHandler}>
        continue
      </button>
    </>
  );
}

export default Camping;
