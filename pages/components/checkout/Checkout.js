const Cheackout = (props) => {
  // post request to fulfill reservation
  function reserveSpots(event) {
    event.preventDefault();
    const id = { id: props.reservationID };

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
