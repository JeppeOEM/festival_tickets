import StyleSheet from "/styles/component/order.module.scss";

function Order(props) {
  let order = props.order[0].concat(props.order[1]);
  const prices = [];

  return (
    <>
      <h2>Your order</h2>
      <ul className={StyleSheet.orderList}>
        {order.map((entry) => {
          if (entry === Number) {
            return;
          }
          if (entry.state !== 0) {
            prices.push(entry.price * entry.state);
            return (
              <li className={StyleSheet.orderItem} key={entry.name}>
                <span>
                  {entry.name}: {entry.state}
                </span>
                <span className='item-price'>{entry.price * entry.state},- DKK</span>
              </li>
            );
          }
        })}
      </ul>
      <div className={StyleSheet.total}>
        <p>total:</p>
        <p>{prices.length === 0 ? "0" : `${prices.reduce((a, b) => a + b)},-DKK`}</p>
      </div>
    </>
  );
}

export default Order;
