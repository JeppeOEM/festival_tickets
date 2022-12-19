import StyleSheet from "../../styles/component/order.module.scss";

function Order(props) {
  let order = props.order[0].concat(props.order[1]);
  const prices = [];

  return (
    <div className={StyleSheet.order}>
      <svg className={StyleSheet.close} onClick={props.modalHandler} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
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
                <span className="item-price">{entry.price * entry.state},- DKK</span>
              </li>
            );
          }
        })}
      </ul>
      <div className={StyleSheet.total}>
        <p>total:</p>
        <p>{prices.length === 0 ? "0" : `${prices.reduce((a, b) => a + b)},-DKK`}</p>
      </div>
    </div>
  );
}

export default Order;
