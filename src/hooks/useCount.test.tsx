import { renderHook } from "@testing-library/react";
import useCount from "./useCount";
import { RecoilRoot } from "recoil";
import { act } from "react-dom/test-utils";

describe("useCount test", () => {
  it("should use count", () => {
    const { result } = renderHook(
      ({ initial }) => useCount({ key: "test", initial }),
      {
        wrapper: ({ children }) => {
          return <RecoilRoot>{children}</RecoilRoot>;
        },
        initialProps: {
          initial: 10,
        },
      }
    );

    expect(result.current.count).toBe(10);

    act(() => result.current.increase());
    act(() => result.current.increase());
    act(() => result.current.increase());

    expect(result.current.count).toBe(13);

    act(() => result.current.decrease());
    act(() => result.current.decrease());

    expect(result.current.count).toBe(11);
  });
});
