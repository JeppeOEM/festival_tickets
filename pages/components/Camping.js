import { useState } from "react";
import BookingLayout from "../../layout/bookingLayout";

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
  const allTickets = props.regTickets + props.vipTickets;
  const [copy, setCopy] = useState(allTickets);

  return (
    <>
      <h2>Choose camping options</h2>
      <p>You have {copy} people left</p>
      {props.options.map((option) => {
        return (
          <div className="camping-option" key={option.name}>
            <h3>{option.name}</h3>
            <div className="change-number">
              <button
                onClick={() => {
                  if (option.state > 0 && copy < allTickets) {
                    setCopy(copy + option.spot);
                    option.stateHandler(option.state - 1);
                  } else {
                    return;
                  }
                  console.log(copy);
                }}
              >
                -
              </button>
              <span>{option.state}</span>
              <button
                onClick={() => {
                  if (copy - option.spot >= 0) {
                    setCopy(copy - option.spot);
                    option.stateHandler(option.state + 1);
                    // console.log(option.stateHandler);
                  } else {
                    alert("You do not have enough tickets for that option. Try to pick different camping options.");
                    return;
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}

      {/* <div className="camping-option">
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
              if (green < 1) {
                setGreen(green + 1);
              } else {
                return;
              }
            }}
          >
            +
          </button>
        </div>
      </div> */}
      <button onClick={props.statusHandler}>continue</button>
    </>
  );
}

export default Camping;
