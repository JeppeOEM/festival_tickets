import StyleSheet from "/styles/component/bookinglayout.module.scss";

function Steps(props) {
  return (
    <>
      <ul className={StyleSheet.steps}>
        <li className={StyleSheet.active}>
          <span className={StyleSheet.stepNumber}>1.</span>
          <span>Tickets</span>
        </li>
        {props.step1 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>2.</span>
            <span>Camping</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>2.</span>Camping
          </li>
        )}
        {props.step2 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>3.</span>
            <span>Camping area</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>3.</span>Camping area
          </li>
        )}
        {props.step3 ? (
          <li className={StyleSheet.active}>
            <span className={StyleSheet.stepNumber}>4.</span>
            <span>Your data</span>
          </li>
        ) : (
          <li className={StyleSheet.inactive}>
            <span className={StyleSheet.stepNumber}>4.</span>Your data
          </li>
        )}
      </ul>
    </>
  );
}

export default Steps;
