function Moadal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        confirm
      </button>
      <button className="btn" onClick={confirmHandler}>
        cancel
      </button>
    </div>
  );
}

export default Moadal;
