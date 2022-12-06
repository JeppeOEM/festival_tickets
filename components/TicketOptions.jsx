function TicketOptions(props) {

  return (
    <>
      <h2>Choose your tickets</h2>
      <div className="regular">
        <div className="tickets-text">
          <h3>Regular</h3>
          <span>icon</span>
          <h5>max 10 tickets per order</h5>
        </div>
        <div className="change-number">
          <button
            onClick={() => {
              if (props.regular > 0) {
                setRegular(props.regular - 1);
              }
            }}
          >
            -
          </button>
          <span>{props.regular}</span>
          <button
            onClick={() => {
              if (props.regular < 10) {
                setRegular(props.regular + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="vip">
        <div className="tickets-text">
          <h3>Regular</h3>
          <span>icon</span>
          <h5>max 5 tickets per order</h5>
        </div>
        <div className="change-number">
          <button
            onClick={() => {
              if (props.vip > 0) {
                setVip(props.vip - 1);
              }
            }}
          >
            -
          </button>
          <span>{vip}</span>
          <button
            onClick={() => {
              if (props.vip < 5) {
                setVip(props.vip + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  )
}

export default TicketOptions