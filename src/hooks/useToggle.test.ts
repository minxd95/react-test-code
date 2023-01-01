import { renderHook, act } from "@testing-library/react";
import useToggle from "./useToggle";

describe("useToggle test", () => {
  it("should use toggle", () => {
    const { result } = renderHook(() => useToggle());

    expect(result.current.status).toBe(false);
    expect(typeof result.current.toggle).toBe("function");
  });
  it("should change status when toggled", () => {
    const { result } = renderHook(() => useToggle());

    const status = result.current.status;

    act(() => result.current.toggle());
    act(() => result.current.toggle());
    act(() => result.current.toggle());

    expect(result.current.status === !status).toBe(true);
  });
});
