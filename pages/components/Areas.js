import { useState } from "react";
import Form from "./checkout/Form";
// stylesheet
import StyleSheet from "../../styles/pages/tickets.module.scss";

function Areas(props) {
  // state to save the response from the server

  // console.log(props.regTickets);
  // console.log("this get", props.areas);
  // const [TheId, getId] = useState(0);

  function sendPutRequest(event) {
    alert(`Great, you booked the spots in ${event.target.id}! When you click "continue", you will have 5 minutes to fill out the forms and complete booking. Otherwise, you will loose your reservation.`);
    const data = {
      area: event.target.id,
      amount: props.spots,
    };
    fetch("http://localhost:8080/reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // server won't take an object, it needs a string
      body: JSON.stringify(data),
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((json) => {
        let data = json;
        getId(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  function getId(json) {
    props.idHandler(json);
  }
  return (
    <>
      {/* <Form id={TheId} /> */}
      <h2 className={StyleSheet.h2}>Camping areas</h2>
      {props.areas.map((area) => {
        return (
          <div className={StyleSheet.card} key={area.area}>
            <div className={StyleSheet.cardText}>
              <h3 className={StyleSheet.h3}>{area.area}</h3>
              {area.available < 20 ? <h5 className={StyleSheet.fewSpots}>Available spots: {area.available}</h5> : <h5>Available spots: {area.available}</h5>}
            </div>

            <div className={StyleSheet.actions}>
              {area.available === 0 ? (
                <button className={StyleSheet.disabled}>choose</button>
              ) : (
                <button className={StyleSheet.button} id={area.area} onClick={sendPutRequest}>
                  choose
                </button>
              )}
            </div>
          </div>
        );
      })}

      <button className={StyleSheet.button} onClick={props.statusHandler}>
        Continue
      </button>
    </>
  );
}

export default Areas;
