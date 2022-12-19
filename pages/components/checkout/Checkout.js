import { getData } from "/data/formdata";

const Cheackout = (props) => {
  console.log(props.info);

  // post request to fulfill reservation
  function reserveSpots(event) {
    event.preventDefault();
    getData({
      id: Date.now(),
      fullname: props.info.name,
      email: props.info.email,
      city: props.info.city,
      postcode: props.info.postcode,
      fulladdress: props.info.fulladdress,
      ticketHolders: props.part,
    });
    const id = { id: props.reservationID };
    console.log(id);

    fetch("http://localhost:8080/fullfill-reservation", {
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
      <form onSubmit={reserveSpots}>
        <label>Cards owner Fullname and Lastname</label>
        <input name="fullname" placeholder="Cards owner Full Name" />
        <label>Card Full number</label>
        <input name="cardnumber" placeholder="1234 - 1234 - 1234 - 1234 " />
        <button type="submit">pay</button>
      </form>
    </>
  );
};

export default Cheackout;
