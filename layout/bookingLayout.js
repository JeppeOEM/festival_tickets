import Order from "../components/Order";
import Steps from "../components/Steps";

function BookingLayout(props) {
  return (
    <>
      <Steps step1={props.step1} />
      <section className="step 1">
        {props.children}
        <Order regTickets={props.regTickets} vipTickets={props.vipTickets} />
      </section>
    </>
  );
}

export default BookingLayout;