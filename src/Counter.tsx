import useCount from "./hooks/useCount";

function Counter() {
  const {
    count: count1,
    increase: increase1,
    decrease: decrease1,
  } = useCount({ key: "one", initial: 0 });
  const {
    count: count2,
    increase: increase2,
    decrease: decrease2,
  } = useCount({
    key: "two",
    initial: 10,
  });
  const {
    count: count3,
    increase: increase3,
    decrease: decrease3,
  } = useCount({
    key: "three",
    initial: 100,
  });

  return (
    <>
      <div>
        1 (<strong data-testid="count1">{count1}</strong>) :{" "}
        <button onClick={() => increase1()} data-testid="plusBtn1">
          +
        </button>
        <button onClick={() => decrease1()} data-testid="minusBtn1">
          -
        </button>
      </div>
      <div>
        2 (<strong data-testid="count2">{count2}</strong>) :{" "}
        <button onClick={() => increase2()} data-testid="plusBtn2">
          +
        </button>
        <button onClick={() => decrease2()} data-testid="minusBtn2">
          -
        </button>
      </div>
      <div>
        3 (<strong data-testid="count3">{count3}</strong>) :{" "}
        <button onClick={() => increase3()} data-testid="plusBtn3">
          +
        </button>
        <button onClick={() => decrease3()} data-testid="minusBtn3">
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
