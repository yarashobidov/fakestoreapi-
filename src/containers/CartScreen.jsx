import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Cart, EmptyCart } from "../components/Cart";

function CartScreen() {
  const carts = useSelector((state) => state.product.cart);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let p = 0;
    carts.forEach((element) => {
      p += element.qwt * element.price;
      setPrice(p);
    });
  }, [carts]);

  return (
    <>
      <div className="cart-screen">
        {carts.length !== 0 ? (
          <>
            <div className="ui items">
              {carts.map((cart) => (
                <Cart key={cart.id} cart={cart} />
              ))}
            </div>

            <div className="cart-screen-bottom">
              <div className="number">
                {" "}
                <strong> All product: </strong>
                <span>{carts.length}</span>
              </div>
              <div className="all-price">
                {" "}
                <strong>Total:</strong> <span>{price}</span>
              </div>
            </div>

          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
}

export default CartScreen;
