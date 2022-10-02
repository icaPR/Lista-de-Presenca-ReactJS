import "./styles.css";

export type CardProps = {
  name: string;
  time: string;
};

export function Card(props: CardProps) {
  return (
    <div className="cards">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  );
}
