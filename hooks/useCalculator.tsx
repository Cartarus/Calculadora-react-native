import { useEffect, useRef, useState } from "react";

enum Operator {
  Add = "+",
  Subtract = "-",
  Multiply = "x",
  Divide = "/",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("");
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState("0");

  const lastOperation = useRef<Operator | undefined>(undefined);

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPreviousNumber(subResult.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  const clean = () => {
    setNumber("0");
    setPreviousNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number === "0") return;
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    return setNumber("-" + number);
  };

  const deleteLast = () => {
    if (number.length === 2 && number.startsWith("-")) {
      return setNumber("0");
    }
    if (number.length === 1) {
      return setNumber("0");
    }
    setNumber(number.slice(0, -1));
  };

  const setLastNumber = () => {
    calculateResult();
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    }
    setPreviousNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.Divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.Multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.Subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.Add;
  };

  const calculateSubResult = () => {
    const [firstValue, operator, secondValue] = formula.split(" ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operator) {
      case Operator.Add:
        return num1 + num2;

      case Operator.Subtract:
        return num1 - num2;

      case Operator.Multiply:
        return num1 * num2;

      case Operator.Divide:
        return num1 / num2;

      default:
        throw new Error("Invalid operator");
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPreviousNumber("0");
  };

  const buildNumber = (numberString: string) => {
    //Verificar si ya existe el punto decimal

    if (number.includes(".") && numberString === ".") return;

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }

      //Si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }

      //Evaluar si es diferente de cero, no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      //evitar 00.00000000
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    //Props
    formula,
    number,
    previousNumber,

    //Methods
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  };
};
