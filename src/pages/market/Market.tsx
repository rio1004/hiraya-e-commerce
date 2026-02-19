import Filters from "./Filters";
import CardContainer from "./CardContainer";
import { useState } from "react";
import { LuListFilter } from "react-icons/lu";
const Market = () => {
  const [expanded, setExpanded] = useState(false);
  console.log(import.meta.env.VITE_API_URL);
  return (
    <>
      <section className="flex flex-col items-center mt-6 text-center">
        <div className="px-2 max-w-2xl flex flex-col items-center gap-4">
          <p className="text-2xl">Hiraya’s Wallet</p>

          <p className={`${expanded ? "" : "line-clamp-3"}`}>
            Inspired by Filipino craftsmanship, Hiraya’s wallets are handmade
            using real leather from an official Marikina leather store.
            Thoughtfully designed to keep your essentials organised, each piece
            blends timeless style with everyday function—perfect to carry on its
            own or keep in your handbag.
          </p>

          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm underline"
          >
            {expanded ? "Read less" : "Read more..."}
          </button>
        </div>
      </section>
      <section className="font-light flex border-[#1E1E1E] border-y py-4 justify-center items-center mt-6">
        <ul className="flex gap-2">
          <li>Long Wallets</li>
          <li>|</li>
          <li>Short Wallets</li>
          <li>|</li>
          <li>Card Holders</li>
        </ul>
      </section>
      <div className="flex md:hidden items-center justify-start ml-4 gap-2 mt-5 ">
        <LuListFilter size={24} />{" "}
        <p className="tracking-widest font-medium">FILTER</p>
      </div>
      <section className="flex mt-6 mx-4 md:mx-8 gap-25">
        <Filters />
        <CardContainer />
      </section>
    </>
  );
};

export default Market;
