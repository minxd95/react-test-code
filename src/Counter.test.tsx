import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";

import Counter from "./Counter";

describe("Counter test", () => {
  it("should render Counter", () => {
    render(<Counter />, {
      wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
    });

    const plusButton = screen.getByTestId("plusBtn1");
    userEvent.click(plusButton);
    expect(screen.getByTestId("count1")).toHaveTextContent("1");

    const plusButton2 = screen.getByTestId("plusBtn2");
    userEvent.click(plusButton2);
    expect(screen.getByTestId("count2")).toHaveTextContent("11");

    const plusButton3 = screen.getByTestId("plusBtn3");
    userEvent.click(plusButton3);
    expect(screen.getByTestId("count3")).toHaveTextContent("101");
  });
});
