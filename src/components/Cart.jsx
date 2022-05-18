import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decqwt, incqwt } from "../redux/actions/actions";
import icon from "../styles/icon.svg";

export const Cart = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="item cart-screen-item">
      <div className="ui tiny image">
        <img className="" src={cart.image} />
      </div>
      <div className="content">
        <div className="header">{cart.title}</div>
        <div style={{ display: "block", margin: "10px 0" }} className="header">
          <span className="price">
            {" "}
            {cart.qwt} X ${cart.price} = ${cart.qwt * cart.price}{" "}
          </span>
        </div>
        <div className="description">
          <button
            className="ui secondary basic button"
            onClick={() => dispatch(decqwt(cart.id))}
          >
            <i className="minus icon"></i>
          </button>
          <span> &nbsp; {cart.qwt} &nbsp;</span>
          <button
            className="ui secondary basic button"
            onClick={() => dispatch(incqwt(cart.id))}
          >
            <i className="plus icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export const EmptyCart = () => {

  const navigate = useNavigate()
  return (
    <>
      <div style={{ textAlign: "center" }} className="empty-cart">
        <img style={{ maxHeight: "500px" }} src={icon} alt="" />
      </div>
      <div className="go-home">
        <button className="ui secondary button" onClick={() => navigate(-1)}>
          <i className="arrow left icon"></i> <span>Go Back</span>
        </button>
      </div>
    </>
  );
};
