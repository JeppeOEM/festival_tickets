import { useState } from "react";
import BookingLayout from "../layout/bookingLayout";

// export async function getServerSideProps(context) {
//   console.log(context.query);
//   return {
//     props: {
//       regular: context.query.regTickets,
//       vip: context.query.vipTickets,
//     },
//   };
// }

function Camping(props) {
  const [regular, setRegular] = useState(0);
  const [two, setTwo] = useState(0);
  const [three, setThree] = useState(0);

  const allTickets = props.regTickets + props.vipTickets;

  return (
    <>
      <BookingLayout>
        <div className="camping-option">
          <h3>Regular camping spot</h3>
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
                if (regular < allTickets) {
                  setRegular(regular + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        {allTickets % 2 === 0 && (
          <div className="camping-option">
            <h3>Pre-setup tent for 2 people</h3>
            <div className="change-number">
              <button
                onClick={() => {
                  if (two > 0) {
                    setTwo(two - 1);
                  }
                }}
              >
                -
              </button>
              <span>{two}</span>
              <button
                onClick={() => {
                  if (two < allTickets / 2) {
                    setTwo(two + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        )}
        {allTickets % 3 === 0 && (
          <div className="camping-option">
            <h3>Pre-setup tent for 3 people</h3>
            <div className="change-number">
              <button
                onClick={() => {
                  if (three > 0) {
                    setThree(three - 1);
                  }
                }}
              >
                -
              </button>
              <span>{three}</span>
              <button
                onClick={() => {
                  if (three < allTickets / 3) {
                    setThree(three + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        )}
        {(allTickets % 5 === 0 || (allTickets % 5) % 2 === 0 || (allTickets % 5) % 3 === 0) && (
          <>
            <div className="camping-option">
              <h3>Pre-setup tent for 2 people</h3>
              <div className="change-number">
                <button
                  onClick={() => {
                    allTickets += 2;
                    if (two > 0) {
                      setTwo(two - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{two}</span>
                <button
                  onClick={() => {
                    allTickets -= 2;
                    if (allTickets > 1) {
                      setTwo(two + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="camping-option">
              <h3>Pre-setup tent for 3 people</h3>
              <div className="change-number">
                <button
                  onClick={() => {
                    if (three > 0) {
                      setThree(three - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{three}</span>
                <button
                  onClick={() => {
                    if (allTickets > 2) {
                      setThree(three + 1);
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </>
        )}
        <div className="camping-option">
          <h3>Green camping</h3>
        </div>
        <button onClick={props.statusHandler}>continue</button>
      </BookingLayout>
    </>
  );
}

export default Camping;
