import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartProduct } from "../redux/actions/actions";

function Card({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="ui card product">
      <div className="image">
        <div className="link-div">
          <Link to={`/card/${product.id}`}>More...</Link>
        </div>
        <img src={product.image} alt={product.title} />
      </div>
      <div className="content">
        <span className="header"> {product.title.slice(0, 20)}</span>
        <div className="description">
          {product.description.slice(0, 60).toLowerCase()}
        </div>
      </div>
      <div className=" product-bottom   content">
        <span>{product.rating.count} $</span>
        <div>
          <div
            onClick={() => {
              dispatch(addCartProduct(product));
            }}
            className="ui primary vertical animated button"
            tabIndex="0"
          >
            <div className="hidden content">Shop</div>
            <div className="visible content">
              <i className=" shop icon"></i>
            </div>
          </div>
          {/* <button className="ui black basic button">Add to Cart</button> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
