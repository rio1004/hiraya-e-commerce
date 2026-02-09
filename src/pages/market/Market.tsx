import Filters from "./Filters";
import CardContainer from "./CardContainer";
const Market = () => {
  return (
    <>
      <section className="flex flex-col items-center mt-6 text-center">
        <div className="w-2xl flex flex-col items-center gap-4">
          {" "}
          <p className="text-2xl">Women's Wallet</p>
          <p>
            Inspired by Filipino craftsmanship, Hiraya’s wallets are handmade
            using real leather from an official Marikina leather store.
            Thoughtfully designed to keep your essentials organised, each piece
            blends timeless style with everyday function—perfect to carry on its
            own or keep in your handbag.
          </p>
        </div>
      </section>
      <section className="flex border-[#1E1E1E] border-y-2 py-4 justify-center items-center mt-6">
        <ul className="flex gap-4">
          <li>Long Wallets</li>
          <li>Short Wallets</li>
          <li>Card Holders</li>
        </ul>
      </section>
      <section className="flex mt-6 mx-8 gap-25">
        <Filters />
        <CardContainer />
      </section>
    </>
  );
};

export default Market;
