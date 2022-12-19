import StyleSheet from "../../styles/component/bookinglayout.module.scss";

function Steps(props) {
  // console.log(props.step1);
  return (
    <>
      <ul className={StyleSheet.steps}>
        <li className={StyleSheet.active}>
          <span className={StyleSheet.stepNumber}>1.</span>
          <span>Choose the tickets</span>
        </li>
        {props.step1 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>2.</span>
            <span>Choose camping</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>2.</span>Choose camping
          </li>
        )}
        {props.step2 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>3.</span>
            <span>Choose camping area</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>3.</span>Choose camping area
          </li>
        )}
        {props.step3 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>4.</span>
            <span>Add your data</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>4.</span>Add your data
          </li>
        )}
      </ul>
    </>
  );
}

export default Steps;
