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
    setNumber(0);
  };

  return (
    <Container>
      <Calculator>
        <header>
          <Input state={number} />
          <Button onClick={clear} name="AC" />
        </header>
        <KeyboardCalculator>
          <Numeric>
            {KeyboardNumeric.map((num) => (
              <Button
                onClick={() => setNumber(`${number + num.keys_numb}`)}
                value={num.keys_numb}
                name={num.keys_numb}
              />
            ))}
            <Button name="=" onClick={() => {}} />
          </Numeric>
          <Operator>
            {Operations.map((op) => (
              <Button
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
