import { useState } from "react";

useState;
const Tickets = () => {
  let number = 9;
  const [like, setLike] = useState(0);

  //   const clickMe () ={
  //     setLike(like+1);
  //   }
  if (like > number) {
    alert("number of tickets should be greater than the cappacity of tents");
    setLike(like - like);
  }
  const clickMe = (e) => {
    setLike(like + 3);
  };
  const clickMe1 = (e) => {
    e.preventDefault();

    setLike(like + 2);
  };

  return (
    <>
      <button onClick={clickMe}> add 3</button>
      <button onClick={clickMe1}> add 2</button>
      <p>{like}</p>
      <p>{number}</p>
    </>
  );
};
export default Tickets;
