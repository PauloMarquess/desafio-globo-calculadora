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
  const [number, setNumber] = useState<any>(1);

  const clear = () => {
    setNumber(0);
  };

  return (
    <Container>
      <Calculator>
        <Input state={number} />
        <Button onClick={clear} name="AC" />
        <KeyboardCalculator>
          <Numeric>
            {KeyboardNumeric.map((num) => (
              <Button
                onClick={() => setNumber(num.keys_numb)}
                value={num.keys_numb}
                name={num.keys_numb}
              />
            ))}
            <Button name="=" onClick={() => {}} />
          </Numeric>
          <Operator>
            {Operations.map((op) => (
              <Button onClick={() => {}} name={op.operation} value={op.value} />
            ))}
          </Operator>
        </KeyboardCalculator>
      </Calculator>
    </Container>
  );
};

export default App;
