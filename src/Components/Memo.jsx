/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const handleInput = (e) => {
    // e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  };

  // Memoize the result of the expensive calculation
  const computedValue = useMemo(() => {
    console.log("Expensive computation running...");

    setArray([...array, count + 1]);

    console.log(array);
    return array;
  }, [count >= 5 ? "" : count]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
