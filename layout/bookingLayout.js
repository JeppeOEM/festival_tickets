import Order from "../pages/components/Order";
import Steps from "../pages/components/Steps";
import StyleSheet from "../styles/component/bookinglayout.module.scss";

function BookingLayout(props) {
  return (
    <div className={StyleSheet.bLayout}>
      <section className={StyleSheet.layoutGrid}>
        <div>
          <section className={StyleSheet.info}>
            <Steps step1={props.step1} step2={props.step2} step3={props.step3} />
            {props.step3 && <h3>Your reservation is valid for {props.bookingTime / 60000} minutes.</h3>}
          </section>
          <div>{props.children}</div>
        </div>
        <div className={StyleSheet.order}>
          <Order order={[props.tickets, props.camping]} />
        </div>
      </section>
    </div>
  );
}

export default BookingLayout;
