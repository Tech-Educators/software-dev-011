export default function BiscuitsDiv(props) {
  return (
    <div className="biscuit-box">
      <h2>{props.name}</h2>
      <img src={props.src} alt="biscuit" className="biscuit-img" />
      <p>{props.description}</p>
    </div>
  );
}
