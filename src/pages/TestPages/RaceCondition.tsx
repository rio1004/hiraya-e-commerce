import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

function fakeSearchApi(query: string, signal?: AbortSignal): Promise<string[]> {
  return new Promise((resolve, reject) => {
    let delay = 0;

    if (query === "re") delay = 800; // slow
    if (query === "rea") delay = 300; // fast

    const resultsMap: Record<string, string[]> = {
      r: ["react-base"],
      re: ["react", "redux"],
      rea: ["react-hooks", "react-router"],
      reac: ["react-router-dom"],
      react: ["react-full"],
    };

    const timer = setTimeout(() => {
      resolve(resultsMap[query] || []);
    }, delay);

    // Listen for abort signal
    signal?.addEventListener("abort", () => {
      clearTimeout(timer);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}


const RaceCond = () => {
  const [input, setInput] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<[]>([]);
  const abortControllerRef = useRef<AbortController | null>(null);

  const search = async (value: string) => {
    setInput(value);
    if (!value) {
      setSearchResult([]);
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchAPI = async () => {
      setIsTyping(true);
      const res = await fakeSearchApi(input, controller.signal);
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

export default RaceCond;
