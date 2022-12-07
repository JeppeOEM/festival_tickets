import { useState } from "react";
import Link from "next/link";
import BookingLayout from "../layout/bookingLayout";
import Camping from "./camping";

function Tickets() {
  // process status
  const [tickets, setTickets] = useState(false);
  const [camping, setCamping] = useState(false);
  const [area, setArea] = useState(false);
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);

  return (
    <>
      <BookingLayout step1={tickets} regTickets={regular} vipTickets={vip}>
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
                <h3>Regular</h3>
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

        {tickets && <Camping regTickets={regular} vipTickets={vip} status={camping} statusHandler={setCamping} />}

        {/* <Link href={{ pathname: "/camping", query: { regTickets: regular, vipTickets: vip } }}>
          <button onClick={() => setTickets(true)}>continue</button>
        </Link> */}
      </BookingLayout>
    </>
  );
}

export default Tickets;
