import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { addCartProduct, getproduct } from "../redux/actions/actions";
function CardScreen() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const { id } = useParams();
  const navigate = useNavigate();

  const getProduct = async (ids) => {
    await dispatch(getproduct(ids));
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <>
      {product !== null ? (
        < >
          <div className="ui card-screen segment">
            <div className="ui two column stackable very relaxed grid">
              <div className="column">
                <img
                  className="ui medium centered image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="column card-screen-info">
                <div className="category ">{product.category}</div>
                <h2>{product.title}</h2>
                <div className="product-rating">
                  Rating {product.rating.rate}
                  <div className="ui star rating disabled" data-rating="1">
                    <i
                      className="icon active"
                      style={{ color: "#000 !important" }}
                    ></i>
                  </div>
                </div>
                <div className="product-price">$ {product.price}</div>
                <p className=" product-description">{product.description}</p>
                <div className="div-button">
                  <button
                    className="ui black basic button"
                    onClick={() => {
                      dispatch(addCartProduct(product));
                    }}
                  >
                    Add to Cart
                  </button>
                  <NavLink to="/cart" className="ui black button">
                    {" "}
                    Go to Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="go-home">
            <button className="ui secondary button" onClick={() => navigate(-1)}>
              <i className="arrow left icon"></i> <span>Go Back</span>
            </button>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CardScreen;
