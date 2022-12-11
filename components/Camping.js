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
  const allTickets = props.regTickets + props.vipTickets;
  const [copy, setCopy] = useState(allTickets);

  return (
    <>
      {/* <BookingLayout regCamping={regular} twoCamping={two} threeCamping={three} greenCamping={green}> */}
      <h2>Choose camping options</h2>
      {props.options.map((option) => {
        return (
          <div className="camping-option" key={option.name}>
            <h3>{option.name}</h3>
            <div className="change-number">
              <button
              {}
                onClick={() => {
                  if (copy >= 0) {
                    setCopy(copy + option.iterator);
                    setRegular(option.state - 1);
                  }
                  console.log(copy);
                }}
              >
                -
              </button>
              <span>{option.state}</span>
              <button
                onClick={() => {
                  setCopy(copy - option.iterator);
                  if (copy > 0) {
                    setRegular(option.state + 1);
                  } else {
                    setCopy(copy + option.iterator);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        );
      })}

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
      </div>
      <button onClick={() => props.statusHandler(regular, two, three)}>continue</button>
      {/* </BookingLayout> */}
    </>
  );
}

export default Camping;
