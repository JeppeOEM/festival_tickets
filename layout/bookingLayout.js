import Order from "../components/Order";
import Steps from "../components/Steps";

function BookingLayout(props) {
  return (
    <>
      <Steps step1={props.step1} step2={props.step2} step3={props.step3} />
      <section className="step 1">
        {props.children}
        <Order tickets={props.tickets} regCamping={props.regCamping} doubleTent={props.twoCamping} trippleTent={props.threeCamping} greenCamping={props.greenCamping} />
      </section>
    </>
  );
}

export default BookingLayout;
