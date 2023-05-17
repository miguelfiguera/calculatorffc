import React, { useState, useEffect } from "react";

export default function Calc() {
  const theNumbs = [
    {
      num: 0,
      name: "zero",
    },
    {
      num: 1,
      name: "one",
    },
    {
      num: 2,
      name: "two",
    },
    {
      num: 3,
      name: "three",
    },
    {
      num: 4,
      name: "four",
    },
    {
      num: 5,
      name: "five",
    },
    {
      num: 6,
      name: "six",
    },
    {
      num: 7,
      name: "seven",
    },
    {
      num: 8,
      name: "eight",
    },
    {
      num: 9,
      name: "nine",
    },
  ];

  const theOperators = [
    { name: "add", value: "+" },
    { name: "subtract", value: "-" },
    { name: "multiply", value: "*" },
    { name: "divide", value: "/" },
  ];
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState([]);
  const [operator, setOperator] = useState(false);
  const [decimal, setDecimal] = useState(false);
  const [result, setResult] = useState();

  const handleClear = () => {
    setOutput(0);
    setInput(0);
    setOperator(false);
    setResult(0);
    setDecimal(false);
  };

  return (
    <div
      id="calculator"
      className="container position-absolute top-50 start-50 translate-middle border border-secondary rounded-3"
      style={{ height: "400px", width: "325px", backgroundColor: "black" }}
    >
      {" "}
      <h1>{input.typeOf}</h1>
      <div id="screen" className="my-3 border border-secondary text-light">
        <div
          id="display"
          style={{ height: "50px", backgroundColor: "#ea580c" }}
        >
          {result !== 0 ? result : output}
        </div>
        <div
          id="input"
          className="border-top border-bottom border-secondary overflow-auto"
          style={{ height: "50px", backgroundColor: "#a16207" }}
        >
          {input}
        </div>
      </div>
      <div id="operators">
        {theOperators.map((e) => {
          return (
            <button
              value={e.value}
              onClick={(e) => {
                if (operator === false) {
                  setInput(input + e.target.value);
                  setOperator(true);
                  setDecimal(false)
                } else {
                  //this is the place to insert equalto...
                }
              }}
              id={e.name}
              className="btn btn-dark mx-2 my-2 px-4"
            >
              {e.value}
            </button>
          );
        })}
      </div>
      <div className="numbers">
        {theNumbs.map((e) => {
          return (
            <button
              className="btn btn-primary mx-2 my-2 py-3 px-3"
              onClick={(e) => {
                setInput(input + e.target.value);
              }}
              value={e.num}
              id={e.name}
            >
              {e.num}
            </button>
          );
        })}
        <button
          id="decimal"
          value="."
          className="btn btn-dark px-3 ms-2"
          onClick={(e) => {
            if (decimal === false) {
              setDecimal(true);
              setInput(input + e.target.value);
            }
          }}
        >
          .
        </button>
        <button
          id="clear"
          onClick={handleClear}
          className="btn btn-warning px-4 mx-3"
        >
          C
        </button>
        <button id="equals" className="btn btn-success px-5">
          =
        </button>
      </div>
    </div>
  );
}
