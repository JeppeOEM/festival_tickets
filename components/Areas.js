function Areas(props) {
  // console.log(props.regTickets);
  console.log("this one", props.areas);

  function sendPutRequest(event) {
    console.log(event.target.id);
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
