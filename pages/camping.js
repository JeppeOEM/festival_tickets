import { GetServerSideProps } from "next";

// export const getServerSideProps = (context) => {
//   console.log(context.query);
//   return {
//     props: {
//       regular: context.query.regTickets,
//       vip: context.query.vipTickets,
//     },
//   };
// };

export async function getServerSideProps(context) {
  console.log(context.query);
  return {
    props: {
      regular: context.query.regTickets,
      vip: context.query.vipTickets,
    },
  };
}

function Camping(props) {
  console.log(props.regular);
  return <></>;
}

export default Camping;
