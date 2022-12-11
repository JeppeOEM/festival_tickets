import { useState } from "react";
import Link from "next/link";
import BookingLayout from "../layout/bookingLayout";
import Camping from "../components/Camping";
import Areas from "../components/Areas";

function Tickets(props) {
  // process status
  const [tickets, setTickets] = useState(false);
  const [camping, setCamping] = useState(false);
  const [area, setArea] = useState(false);
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);
  const [spots, setSpots] = useState(0);

  function completeCamping(reg, two, three) {
    console.log("spots:", reg + two + three);
    setSpots(reg + two + three);
    setCamping(true);
  }

  function completeArea() {
    setArea(true);
  }

  return (
    <>
      <BookingLayout step1={tickets} step2={camping} step3={area} regTickets={regular} vipTickets={vip}>
        {!tickets && (
          <>
            <h2>Choose your tickets</h2>
            <div className="regular">
              <div className="tickets-text">
                <h3>Regular</h3>
                <span>icon</span>
                <h5>max 10 tickets per order</h5>
              </div>
              <div className="change-number">
                <button
                  onClick={() => {
                    if (regular > 0) {
                      setRegular(regular - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{regular}</span>
                <button
                  onClick={() => {
                    if (regular < 10) {
                      setRegular(regular + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="vip">
              <div className="tickets-text">
                <h3>V.I.P.</h3>
                <span>icon</span>
                <h5>max 5 tickets per order</h5>
              </div>
              <div className="change-number">
                <button
                  onClick={() => {
                    if (vip > 0) {
                      setVip(vip - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{vip}</span>
                <button
                  onClick={() => {
                    if (vip < 5) {
                      setVip(vip + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
              <button onClick={() => setTickets(true)}>continue</button>
            </div>
          </>
        )}

        {tickets && !camping && <Camping regTickets={regular} vipTickets={vip} status={camping} statusHandler={completeCamping} />}
        {camping && !area && <Areas status={area} statusHandler={completeArea} areas={props.areas} spots={spots} />}

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
