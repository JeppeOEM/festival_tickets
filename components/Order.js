function Order(props) {
  let order = props.order[0].concat(props.order[1]);

  return (
    <>
      <h2>Your order</h2>
      <ul>
        {order.map((entry) => {
          if (entry === Number) {
            return;
          }
          if (entry.state !== 0) {
            return (
              <li key={entry.name}>
                <p>{entry.name}</p>
                <p>{entry.state}</p>
                <p className="item-price">{entry.price * entry.state}</p>
              </li>
            );
          }
        })}

        {/* {orders.map((entry) => {
          if (entry[1] > 0) {
            if (entry[0] === "regTickets") {
              return (
                <li key={entry[0]}>
                  <span>Regular tickets: {entry[1]}</span>
                  <span>{799 * entry[1]},- DKK</span>
                </li>
              );
            }
            if (entry[0] === "vipTickets") {
              return (
                <li key={entry[0]}>
                  <span>V.I.P. tickets: {entry[1]}</span>
                  <span>{1299 * entry[1]},- DKK</span>
                </li>
              );
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
        })} */}
      </ul>
    </>
  );
}

export default Order;
