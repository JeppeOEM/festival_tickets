import StyleSheet from "../../styles/component/bookinglayout.module.scss";

function Steps(props) {
  // console.log(props.step1);
  return (
    <>
      <ul className={StyleSheet.steps}>
        {props.step1 ? <li className={StyleSheet.done}>Choose the tickets</li> : <li className={StyleSheet.pending}>Choose the tickets</li>}
        {props.step2 ? <li className={StyleSheet.done}>Choose camping</li> : <li className={StyleSheet.pending}>Choose camping</li>}
        {props.step3 ? <li className={StyleSheet.done}>Choose camping area</li> : <li className={StyleSheet.pending}>Choose camping area</li>}
        {props.step4 ? <li className={StyleSheet.done}>Add your data</li> : <li className={StyleSheet.pending}>Add your data</li>}
      </ul>
    </>
  );
}

export default Steps;
