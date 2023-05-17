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
    { name: "divide", value: "\/" },
  ];
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState(false);
  const [decimal, setDecimal] = useState(false);

  const handleClear = () => {
    setOutput(0);
    setInput("");
    setOperator(false);
    setDecimal(false);
  };

  const handleOperators = (e) => {
    const arr=['+','/','*','-']

    if (
      (input[input.length - 1] === "+" ||
        input[input.length - 1] === "*" ||
        input[input.length - 1] === "/") &&
      e.target.value === "-"
    ) {
      setInput(input + e.target.value);
    } else if (operator === false) {
      setInput(input + e.target.value);
      setOperator(true);
      setDecimal(false);
    } else if ( arr.indexOf(input[input.length-2])>= 0 && arr.indexOf(input[input.length-1])>= 0 && arr.indexOf(e.target.value) >= 0){
      setInput(input.slice(0,input.length-2) + e.target.value)   
      console.log(input)
    } else if (input==='' && output.toString().length!==0){
      const lol=output.toString() + e.target.value
      setInput(lol)
    }
    
    else {
    }
  };

  const handleDecimal = (e) => {
    if (decimal === false) {
      setDecimal(true);
      setInput(input + e.target.value);
    }
  };

  const handleEqual = () => {
    setOutput(
 String(eval(input))
    );
    setInput("");
    setOperator(false);
    setDecimal(false);
  };

  const handleInput = (e) => {
    if((e.target.value===0 || e.target.value==='0') && (input[input.length-1]===0 ||input[input.length-1]==='0')){
      setInput(input)
      return;
    }
    else if (input === "" && output !== "") {
      setInput(input + output);
    }
    setInput(input + e.target.value);
    if (operator === true) {
      setOperator(false);
    }
  };


  return (
    <div
      id="calculator"
      className="container position-absolute top-50 start-50 translate-middle border border-secondary rounded-3"
      style={{ height: "400px", width: "325px", backgroundColor: "black" }}
    >
      {" "}
      <div id="screen" className="my-3 border border-secondary text-light">
        <div
          id="display"
          style={{ height: "50px", backgroundColor: "#ea580c" }}
        >
          {input === "" ? output : input}
        </div>
      </div>
      <div id="operators">
        {theOperators.map((e) => {
          return (
            <button
              value={e.value}
              onClick={(e) => {
                handleOperators(e);
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
                handleInput(e);
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
            handleDecimal(e);
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
        <button
          id="equals"
          className="btn btn-success px-5"
          onClick={handleEqual}
        >
          =
        </button>
      </div>
    </div>
  );
}
