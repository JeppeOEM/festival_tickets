import { useState } from "react";
import Order from "../pages/components/Order";
import Steps from "../pages/components/Steps";
import StyleSheet from "../styles/component/bookinglayout.module.scss";

function BookingLayout(props) {
  const [clicked, setClicked] = useState(false);

  function close() {
    setClicked(false);
  }

  return (
    <div className={StyleSheet.layout}>
      <section className={StyleSheet.layoutGrid}>
        <div>
          <section className={StyleSheet.info}>
            <Steps step1={props.step1} step2={props.step2} step3={props.step3} />
            <svg className={StyleSheet.cart} onClick={() => setClicked(true)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            {props.step3 && <p>Your reservation is valid for {props.bookingTime / 60000} minutes.</p>}
          </section>
          <div>{props.children}</div>
        </div>
        <div className={clicked ? StyleSheet.order : StyleSheet.orderHidden}>
          <Order order={[props.tickets, props.camping]} modalHandler={close} />
        </div>
      </section>
    </div>
  );
}

export default BookingLayout;
