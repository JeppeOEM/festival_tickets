import { GetServerSideProps } from "next";
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
  console.log(props.regTickets);

  const allTickets = props.regTickets + props.vipTickets;

  return (
    <>
      <BookingLayout>
        <div className="camping-option">
          <h3>Regular camping spot</h3>
        </div>
        {allTickets % 2 === 0 && (
          <div className="camping-option">
            <h3>Pre-setup tent for 2 people</h3>
          </div>
        )}
        {allTickets % 3 === 0 && (
          <div className="camping-option">
            <h3>Pre-setup tent for 3 people</h3>
          </div>
        )}
        {allTickets % 5 === 0 && (
          <>
            <div className="camping-option">
              <h3>Pre-setup tent for 2 people</h3>
            </div>
            <div className="camping-option">
              <h3>Pre-setup tent for 3 people</h3>
            </div>
          </>
        )}
        <div className="camping-option">
          <h3>Green camping</h3>
        </div>
      </BookingLayout>
    </>
  );
}

export default Camping;
