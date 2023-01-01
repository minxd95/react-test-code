import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { CountState } from "../recoil/atoms";

const useCount = ({ key, initial }: { key: string; initial: number }) => {
  const [count, setCount] = useRecoilState(CountState({ key, initial }));

  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const decrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  return { count, increase, decrease };
};

export default useCount;
