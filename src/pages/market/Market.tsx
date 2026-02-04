import Header from "@/layout/merchant-layout/Header/Header";
import { SlArrowUp } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
const Market = () => {
  return (
    <>
      <Header />
      <div>
        <p>Women's Wallet</p>
        <p>
          Inspired by Filipino craftsmanship, Hiraya’s wallets are handmade
          using real leather from an official Marikina leather store.
          Thoughtfully designed to keep your essentials organised, each piece
          blends timeless style with everyday function—perfect to carry on its
          own or keep in your handbag.
        </p>
      </div>
      <div>
        <ul>
          <li>Long Wallets</li>
          <li>Short Wallets</li>
          <li>Card Holders</li>
        </ul>
      </div>
      <div>
        <aside>
          <div>
            <p>Availability</p>
            <SlArrowUp />
          </div>
        </aside>
        <div>
          <div>
            <img src="/katha.jpg" alt="" />
            <div>
              <div>
                {" "}
                <p>HUSAI WALLET</p>
                <CiHeart />
              </div>
              <p>₱ 650.00</p>
            </div>
            <button>
              Add to Bag <CiShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Market;
