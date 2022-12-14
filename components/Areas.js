function Areas(props) {
  // console.log(props.regTickets);
  console.log("this one", props.areas);

  function sendPutRequest(event) {
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
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <h2>Areas</h2>
      {props.areas.map((area) => {
        return (
          <div className="area" key={area.area}>
            <h3>{area.area}</h3>
            <p>description description description description description description description description description description description description description </p>
            <h5>Available spots: {area.available}</h5>
            <button id={area.area} onClick={sendPutRequest}>
              choose
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Areas;
