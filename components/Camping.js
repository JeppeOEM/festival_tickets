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
  const [green, setGreen] = useState(0);

  const allTickets = props.regTickets + props.vipTickets;
  const [copy, setCopy] = useState(allTickets);

  return (
    <>
      <BookingLayout regCamping={regular} twoCamping={two} threeCamping={three} greenCamping={green}>
        <div className="camping-option">
          <h3>Regular camping spot</h3>
          <div className="change-number">
            <button
              onClick={() => {
                if (copy >= 0) {
                  setCopy(copy + 1);
                  setRegular(regular - 1);
                }
                console.log(copy);
              }}
            >
              -
            </button>
            <span>{regular}</span>
            <button
              onClick={() => {
                setCopy(copy - 1);
                if (copy > 0) {
                  setRegular(regular + 1);
                } else {
                  setCopy(copy + 1);
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* {(allTickets % 2 === 0 || allTickets % 2 === 1) && (
          <div className="camping-option">
            <h3>Pre-setup tent for 2 people</h3>
            <div className="change-number">
              <button
                onClick={() => {
                  setCopy(copy + 2);
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
                  setCopy(copy - 2);
                  if (copy % 2 === 0) {
                    setTwo(two + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        )} */}
        {/* {(allTickets % 3 === 0 || allTickets % 3 === 1) && (
          <div className="camping-option">
            <h3>Pre-setup tent for 3 people</h3>
            <div className="change-number">
              <button
                onClick={() => {
                  setCopy(copy + 3);
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
                  setCopy(copy - 3);
                  if (copy % 3 === 0) {
                    setThree(three + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        )} */}
        {(allTickets % 2 === 0 || allTickets % 3 === 0 || allTickets % 5 === 0 || (allTickets % 5) % 2 === 0 || (allTickets % 5) % 3 === 0) && (
          <>
            <div className="camping-option">
              <h3>Pre-setup tent for 2 people</h3>
              <div className="change-number">
                <button
                  onClick={() => {
                    if (two > 0) {
                      setCopy(copy + 2);
                      setTwo(two - 1);
                    } else {
                      return;
                    }
                    console.log(copy);
                  }}
                >
                  -
                </button>
                <span>{two}</span>
                <button
                  onClick={() => {
                    setCopy(copy - 2);
                    if (copy > 1) {
                      setTwo(two + 1);
                      console.log(copy);
                    } else {
                      setCopy(copy + 2);
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
                      setCopy(copy + 3);
                      setThree(three - 1);
                    } else {
                      return;
                    }
                  }}
                >
                  -
                </button>
                <span>{three}</span>
                <button
                  onClick={() => {
                    setCopy(copy - 3);
                    if (copy > 2) {
                      setThree(three + 1);
                    } else if (copy === 0) {
                      setCopy(copy + 3);
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
          <div className="change-number">
            <button
              onClick={() => {
                if (green > 0) {
                  setGreen(green - 1);
                } else {
                  return;
                }
              }}
            >
              -
            </button>
            <span>{green}</span>
            <button
              onClick={() => {
                if (green < allTickets) {
                  setGreen(green + 1);
                } else {
                  return;
                }
              }}
            >
              +
            </button>
          </div>
        </div>
        <button onClick={props.statusHandler}>continue</button>
      </BookingLayout>
    </>
  );
}

export default Camping;
