function Order(props) {
  let orders = Object.entries(props);
  console.log(orders);
  console.log(orders[0][0]);
  return (
    <>
      <h2>Your order</h2>
      <ul>
        {orders.map((entry) => {
          if (entry[1] > 0) {
            if (entry[0] === "regTickets") {
              return <li key={entry[0]}>Regular tickets: {entry[1]}</li>;
            } else {
              return <li key={entry[0]}>V.I.P. tickets: {entry[1]}</li>;
            }
          }
        })}
      </ul>
    </>
  );
}

export default Order;
