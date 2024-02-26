import { Link } from "react-router-dom";
const NavigationSpanComp = () => {
  return (
    <span className="navHome">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        Home
      </Link>
    </span>
  );
};
export default NavigationSpanComp;
