import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";

const HeartButton = ({ liked }: { liked: boolean }) => {
  return liked ? (
    <AiFillHeart size={30} className="text-red-500" />
  ) : (
    <CiHeart
      size={30}
      className="text-gray-500 hover:text-red-500 transition"
    />
  );
};
export default HeartButton;
