import { getData } from "/data/formdata";
import StyleSheet from "../../styles/pages/tickets.module.scss";

const Cheackout = (props) => {
  // post request to fulfill reservation
  function reserveSpots(event) {
    event.preventDefault();
    const api = "https://festivalapi.fly.dev/";
    const local = "http://localhost:8080/";
    const id = { id: props.reservationID };
    getData({
      orderId: id.id,
      fullname: props.info.name,
      email: props.info.email,
      city: props.info.city,
      postcode: props.info.postcode,
      fulladdress: props.info.fulladdress,
      ticketHolders: props.part,
    });
    fetch(api + "fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(id),
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <form className={StyleSheet.form} onSubmit={reserveSpots}>
        <div className={StyleSheet.fieldColumn}>
          <label>Cards owner Fullname and Lastname</label>
          <input className={StyleSheet.input} name="fullname" placeholder="Cards owner Full Name" />
        </div>
        <div className={StyleSheet.fieldColumn}>
          <label>Card Full number</label>
          <input className={StyleSheet.input} name="cardnumber" placeholder="1234 - 1234 - 1234 - 1234 " />
        </div>
        <button className={StyleSheet.button} type="submit">
          pay
        </button>
      </form>
    </>
  );
};

export default Cheackout;
