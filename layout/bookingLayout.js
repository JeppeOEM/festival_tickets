import Order from "../pages/components/Order";
import Steps from "../pages/components/Steps";

function BookingLayout(props) {
  return (
    <>
      <Steps step1={props.step1} step2={props.step2} step3={props.step3} />
      <section className="step 1">
        {props.children}
        <Order order={[props.tickets, props.camping]} />
      </section>
    </>
  );
}

export default BookingLayout;
