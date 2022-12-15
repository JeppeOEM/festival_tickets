function Steps(props) {
  // console.log(props.step1);
  return (
    <>
      <ul>
        {!props.step1 && <li>step 1</li>}
        {props.step1 && <li>step 2</li>}
        {props.step2 && <li>step 3</li>}
      </ul>
    </>
  );
}

export default Steps;
