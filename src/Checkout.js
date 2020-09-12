/* eslint-disable no-unused-vars */
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";
import FlipMove from 'react-flip-move';
import { AnimatedList } from 'react-animated-list';

function Checkout() {
const [{basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3> hello, {user?.email.split('@')[0]}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          <AnimatedList animation={"zoom"}>
            {basket.map(item => (
            // console.log(item)
            // return (
              <CheckoutProduct
              // id={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
              // )
            ))}
          </AnimatedList>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        {basket.map(item => (
            // console.log(item)
            // return 
          <div className="checkout__rightProduct">
              <CheckoutProduct
              // id={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
          </div>
              // )
            ))}
      </div>
    </div>
  );
}

export default Checkout;
