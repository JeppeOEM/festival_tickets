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
  console.log(props.regular);
  return (
    <>
      <BookingLayout>
        <div className="camping-option">
          <h3>Regular camping spot</h3>
        </div>
      </BookingLayout>
    </>
  );
}

export default Camping;
