import React, { useState, useEffect } from "react";
import "../css/grid.css";

function Grid() {
  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/todos")
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  const [data, setData] = useState([]);
  const generate_data = () => {
    const keys = Object.keys(data[0]);
    console.log(keys);
    return keys.map((s) => <div>{s}</div>);
  };

  const d = (data) => {
    return <span>{data.title}</span>;
  };
  const Value = () => {
    return (s) => (
      <span>
        <div className="hi">{d(s)}</div>
      </span>
    );
  };

  return (
    <div className="grid">
      {data.length > 0 ? (
        <div className="todos">{generate_data()}</div>
      ) : (
        <p>loading...</p>
      )}
      <div>{Value()}</div>
    </div>
  );
}

export default Grid;
