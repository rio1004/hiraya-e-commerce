import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

function fakeSearchApi(query) { 
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = ["react", "vue", "angular", "svelte", "nextjs"];
      resolve(
        data.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
      );
    }, 800);
  });
}

const Debounce = () => {
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<[]>([]);

  const search = async (value: string) => {
    setInput(value);
    if (!value) {
      setSearchResult([]);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setIsTyping(true);
      const res = await fakeSearchApi(input);
      if (res) {
        setSearchResult(res);
        setIsTyping(false);
      }
      console.log(res);
    };
    const timer = setTimeout(() => {
      fetchAPI();
    }, 500);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="flex items-center justify-center mt-5">
      <div>
        <Input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => search(e.target.value)}
        />
        {isTyping && <p>Loading...</p>}
        <ul>
          {searchResult.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Debounce;
