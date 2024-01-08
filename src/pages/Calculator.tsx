import { useState } from "react";
import Header from "../components/Header";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == '') {
      return
    }

    const value = calc.slice(0, -1);

    setCalc(value)
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          className={"button-" + i.toString()}
          key={i}
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  const clear = () => {
    setCalc('')
  }

  return (
    <>
      <Header />
      <div className="calc-main-container">
        <div className="display">
          {result ? <span>{result}</span> : ""} {calc || "0"}
        </div>
        <div className="calc-buttons-container">
          <button className="podil" onClick={() => updateCalc("/")}>
            /
          </button>
          <button className="pomnoz" onClick={() => updateCalc("*")}>
            *
          </button>
          <button className="plus" onClick={() => updateCalc("+")}>
            +
          </button>
          <button className="minus" onClick={() => updateCalc("-")}>
            -
          </button>
          <button className="del" onClick={deleteLast}>DEL</button>

          <button className="ac" onClick={clear}>AC</button>

          {createDigits()}
          <button className="zero" onClick={() => updateCalc("0")}>
            0
          </button>
          <button className="dot" onClick={() => updateCalc(".")}>
            .
          </button>
          <button className="dorivn" onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
