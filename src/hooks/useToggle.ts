import { useCallback, useState } from "react";

const useToggle = (initial = false) => {
  const [status, setStatus] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setStatus((prev) => !prev);
  }, []);

  return { status, toggle };
};

export default useToggle;
