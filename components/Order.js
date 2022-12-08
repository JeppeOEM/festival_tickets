function Order(props) {
  let orders = Object.entries(props);
  // console.log(orders);
  // console.log(orders[0][0]);
  return (
    <>
      <h2>Your order</h2>
      <ul>
        {orders.map((entry) => {
          if (entry[1] > 0) {
            if (entry[0] === "regTickets") {
              return <li key={entry[0]}>Regular tickets: {entry[1]}</li>;
            }
            if (entry[0] === "vipTickets") {
              return <li key={entry[0]}>V.I.P. tickets: {entry[1]}</li>;
            }
            if (entry[0] === "regCamping") {
              return <li key={entry[0]}>Regular camping spot: {entry[1]}</li>;
            }
            if (entry[0] === "doubleTent") {
              console.log("adding 2ppl tent");
              return <li key={entry[0]}>Pre-setup 2-people tent: {entry[1]}</li>;
            }
            if (entry[0] === "trippleTent") {
              console.log("adding 3ppl tent");
              return <li key={entry[0]}>Pre-setup 3-people tent: {entry[1]}</li>;
            }
            if (entry[0] === "greenCamping") {
              return <li key={entry[0]}>Green camping: {entry[1]}</li>;
            }
          }
        })}
      </ul>
    </>
  );
}

export default Order;
