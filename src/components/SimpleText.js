import "./../css/SimpleText.css";

function SimpleText(props) {
  return <p className={`${props.type}`}>{props.text}</p>;
}

export { SimpleText };
