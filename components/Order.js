function Order(props) {
  let orders = Object.entries(props);
  console.log(orders);
  console.log(orders[0][0]);
  return (
    <>
      <h2>Your order</h2>
      {orders.map((entry) => {
        if (entry[1] > 0) {
          if (entry[0] === "regTickets") {
            return `Regular tickets: ${entry[1]}`;
          } else {
            return `V.I.P. tickets: ${entry[1]}`;
          }
        }
      })}
    </>
  );
}

export default Order;
