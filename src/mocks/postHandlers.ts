import { rest } from "msw";
import { baseUrl } from "./helper";

const posts = [
  {
    id: 133,
    title: "모킹된 포스트",
    body: "이 포스트는 모킹된 포스트입니다",
    userId: 7777,
  },
];

const postHandlers = [
  rest.get(baseUrl("/posts"), async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),

  rest.post(baseUrl("/posts"), async (req, res, ctx) => {
    posts.push(await req.json());
    return res(ctx.status(201));
  }),
];

export default postHandlers;
