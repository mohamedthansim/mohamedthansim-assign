import React from "react";
import "../css/counter.css";
function Counter(props) {
  const [count, setCount] = React.useState(43);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="count">
        <h1>COUNTER</h1>
      <button className="decrement" onClick={decrement}>
        -
      </button>
      <span className="num">{count}</span>
      <button className="increment" onClick={increment}>
        +
      </button>
    </div>
  );
}
export default Counter;