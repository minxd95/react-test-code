import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { recoilWrapper } from "./mocks/helper";
import Post from "./Post";

describe("Post test", () => {
  it('renders "Loading..."', async () => {
    render(<Post />, { wrapper: recoilWrapper });

    expect(await screen.findByText("Loading...")).toBeInTheDocument();
  });

  it("renders post", async () => {
    render(<Post />, { wrapper: recoilWrapper });

    expect(await screen.findByText(/^ID : 133$/)).toBeInTheDocument();
    expect(
      await screen.findByText(/^TITLE : 모킹된 포스트$/)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/^BODY : 이 포스트는 모킹된 포스트입니다$/)
    ).toBeInTheDocument();
    expect(await screen.findByText(/^USER_ID : 7777$/)).toBeInTheDocument();
  });

  it("adds post", async () => {
    render(<Post />, { wrapper: recoilWrapper });

    const submitBtn = await screen.findByTestId("submitBtn");

    const idInput = await screen.findByTestId("idInput");
    const titleInput = await screen.findByTestId("titleInput");
    const bodyInput = await screen.findByTestId("bodyInput");
    const userIdInput = await screen.findByTestId("userIdInput");

    userEvent.type(idInput, "2");
    userEvent.type(titleInput, "타이틀 2");
    userEvent.type(bodyInput, "바디 2");
    userEvent.type(userIdInput, "2");

    userEvent.click(submitBtn);

    expect(await screen.findByText(/^ID : 2$/)).toBeInTheDocument();
    expect(await screen.findByText(/^TITLE : 타이틀 2$/)).toBeInTheDocument();
    expect(await screen.findByText(/^BODY : 바디 2$/)).toBeInTheDocument();
    expect(await screen.findByText(/^USER_ID : 2$/)).toBeInTheDocument();
  });
});
