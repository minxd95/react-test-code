import { atomFamily } from "recoil";

const CountState = atomFamily<number, { key: string; initial: number }>({
  key: "Count",
  default: (param) => param.initial,
});

const ResetState = atomFamily({
  key: "ResetState",
  default: 0,
});

export { CountState, ResetState };
