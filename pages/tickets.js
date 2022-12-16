import { useState } from "react";
import Link from "next/link";
import BookingLayout from "../layout/bookingLayout";
import Camping from "./components/Camping";
import Areas from "./components/Areas";
// import { getID } from "./Areas";
import Participants from "./components/checkout/Participants";

function Tickets(props) {
  // process status
  const [tickets, setTickets] = useState(false);
  const [camping, setCamping] = useState(false);
  const [area, setArea] = useState(false);
  // number and type of tickets
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);
  // number and type of camping spots
  const [basic, setBasic] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);
  const [green, setGreen] = useState(0);
  const [spots, setSpots] = useState(0);
  // getting ID from server
  const [idReceived, setIdReceived] = useState({});

  // functions to switch between components

  function completeCamping() {
    // console.log("spots:", a + b + c);
    setSpots(basic + two + three);
    setCamping(true);
  }

  function completeArea() {
    setArea(true);
  }

  // function to get ID
  const getID = (object) => {
    setIdReceived(object);
  };

  // objects with data for tickets and camping options
  let ticketOptions = [
    {
      name: "regular ticket",
      state: regular,
      stateHandler: setRegular,
      price: 799,
      max: 10,
    },
    {
      name: "v.i.p. ticket",
      state: vip,
      stateHandler: setVip,
      price: 1299,
      max: 5,
    },
  ];

  let campingOptions = [
    { name: "basic camping pass", spot: 1, state: basic, stateHandler: setBasic, price: 100, description: "Come with your own tent and set your own rules! The basic camping pass allows you to access the camping area with your equipment." },
    { name: "pre-setup 2-people tent", spot: 2, state: two, stateHandler: setTwo, price: 299, description: "Avoid the fight for camping space and let us do the job for you! Our crew will put up the tent before your arrival." },
    { name: "pre-setup 3-people tent", spot: 3, state: three, stateHandler: setThree, price: 399, description: "Avoid the fight for camping space and let us do the job for you! Our crew will put up the tent before your arrival." },
    { name: "green camping", state: green, spot: 1, stateHandler: setGreen, price: 249, description: "Get a package of sustainable camping equipment!" },
  ];

  return (
    <>
      <BookingLayout step1={tickets} step2={camping} step3={area} tickets={ticketOptions} camping={campingOptions}>
        {!tickets && (
          <>
            <h2>Choose your tickets</h2>
            {ticketOptions.map((option) => {
              return (
                <>
                  <div className={option.name}>
                    <div className="tickets-text">
                      <h3>{option.name}</h3>
                      <span>icon</span>
                      <p>{option.price},- DKK</p>
                      <h5>max {option.max} tickets per order</h5>
                    </div>
                    <div className="change-number">
                      <button
                        onClick={() => {
                          if (option.state > 0) {
                            option.stateHandler(option.state - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <span>{option.state}</span>
                      <button
                        onClick={() => {
                          if (option.state < option.max) {
                            option.stateHandler(option.state + 1);
                          }
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </>
              );
            })}

            <button onClick={() => setTickets(true)}>continue</button>
          </>
        )}

        {tickets && !camping && <Camping regTickets={regular} vipTickets={vip} options={campingOptions} status={camping} statusHandler={completeCamping} />}
        {camping && !area && <Areas status={area} statusHandler={completeArea} areas={props.areas} spots={spots} idHandler={getID} />}
        {area && <Participants orderResponse={idReceived} participants={basic + vip} />}

        {/* <Link href={{ pathname: "/camping", query: { regTickets: regular, vipTickets: vip } }}>
          <button onClick={() => setTickets(true)}>continue</button>
        </Link> */}
      </BookingLayout>
    </>
  );
}

// DO NOT USE THIS SHIT IN COMPONENTS!!!!!!

export async function getServerSideProps() {
  // console.log();
  // runs ONLY at build time, not in a browser

  // response is an object
  const response = await fetch("http://localhost:8080/available-spots");

  // data is an array of objects (one object for each area in this case)
  const data = await response.json();
  console.log(data);
  // now we just need an object we can use in the component
  return {
    props: {
      areas: data,
    },
  };
}

export default Tickets;
