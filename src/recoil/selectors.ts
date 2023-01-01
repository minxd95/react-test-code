import { selector } from "recoil";
import { ResetState } from "./atoms";

const PostState = selector<
  {
    id: number;
    title: string;
    body: string;
    userId: number;
  }[]
>({
  key: "PostState",
  get: async ({ get }) => {
    get(ResetState("PostState"));
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await data.json();

    return result;
  },
  set: ({ set }) => {
    console.log("ssibal");
    set(ResetState("PostState"), Math.random());
  },
});

export { PostState };
