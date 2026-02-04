import { CiSearch } from "react-icons/ci";
import { PiBagLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <div>
        <p>
          <span className="font-extrabold text-base">Free Delivery</span> for the first order!!!
        </p>
        <header>
          <div>Hiraya Leather</div>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Latest</li>
            <li>Leather Work</li>
          </ul>
        </header>
        <div>
          <CiSearch />
          <PiBagLight />
          <AiOutlineUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
