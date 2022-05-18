
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.product.cart);
  const { pathname } = useLocation();
  const item = cart.length;
  return (
    <>
      {!(pathname === '/notfound') && <header>
        <div className=" ui container">
          <div className="ui secondary pointing  menu">
            <NLink className="item link" to="/">
              Home
            </NLink>
            <div className="right menu">
              <NLink className="ui item link" to="/cart">
                Cart  {""} &nbsp; {item > 0 && <span> ({item})</span>}
              </NLink>
            </div>
          </div>
        </div>
      </header>}
    </>
  );
}

export default Header;

const NLink = ({ to, className, children }) => {
  const location = useLocation();

  return (
    <NavLink
      className={`${className} ${to === location.pathname && "active"}`}
      to={to}
    >
      {children}
    </NavLink>
  );
};
