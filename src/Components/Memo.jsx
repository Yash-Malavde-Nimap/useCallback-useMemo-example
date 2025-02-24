/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const computedValue = useMemo(() => {
    let res = 0;
    for (let i = 0; i < 1000000000; i++) {
      res += i;
    }
    console.log("Expensive Function Running...");

    return res;
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        color: "white",
        border: "2px solid black",
        padding: "50px",
        margin: "20px",
      }}
    >
      <h2>useMemo</h2>
      <h1>Count: {count}</h1>
      <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <Input input={input} handleInput={handleInput} />
      <h5>Expensive Computation Result: {computedValue}</h5>
    </div>
  );
}

const Input = ({ input, handleInput }) => {
  return (
    <>
      <input
        style={{ padding: "10px" }}
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Type something"
      />
    </>
  );
};

export default Memo;
