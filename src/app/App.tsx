import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { KeyboardNumeric, Operations } from "../Mocks";
import {
  Calculator,
  Container,
  KeyboardCalculator,
  Numeric,
  Operator,
} from "./style";

const App = () => {
  const [number, setNumber] = useState<any>(0);

  const clear = () => {
    console.log("visor limpo!");
    setNumber(0);
  };
  const result = number;

  return (
    <Container>
      <Calculator>
        <header>
          <Input state={number} />
          <Button onClick={clear} name="AC" />
        </header>
        <KeyboardCalculator>
          <Numeric>
            {KeyboardNumeric.map((num, index) => (
              <Button
                key={index}
                onClick={() => setNumber(`${number + num.keys_numb}`)}
                value={num.keys_numb}
                name={num.keys_numb}
              />
            ))}
            <Button
              name="="
              onClick={() => {
                console.log("testando", result);
              }}
            />
          </Numeric>
          <Operator>
            {Operations.map((op, index) => (
              <Button
                key={index}
                onClick={() => setNumber(`${number + op.operation}`)}
                name={op.operation}
                value={op.operation}
              />
            ))}
          </Operator>
        </KeyboardCalculator>
      </Calculator>
    </Container>
  );
};

export default App;
