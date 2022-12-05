import { useState } from "react";
import Link from "next/link";

function Tickets() {
  const [regular, setRegular] = useState(0);
  const [vip, setVip] = useState(0);

  return (
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
      </div>
      <Link href="/camping">
        <button>continue</button>
      </Link>
    </>
  );
}

export default Tickets;
