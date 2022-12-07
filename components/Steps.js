function Steps(props) {
  console.log(props.step1);
  return (
    <>
      {!props.step1 && <span>step 1</span>}
      {props.step1 && <span>step 2</span>}
    </>
  );
}

export default Steps;
