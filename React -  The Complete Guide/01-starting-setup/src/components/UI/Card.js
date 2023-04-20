import "./Card.css";
function Card(props) {
  const classes = "card " + props.className; // props.className = class name beside the Card component on other file
  return <div className={classes}>{props.children}</div>; // special prop that passed to every component b/w opening and closing tags
}
export default Card;
