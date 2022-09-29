import "./styles.css";

export function Card(props) {
  return (
    <div className="cards">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
