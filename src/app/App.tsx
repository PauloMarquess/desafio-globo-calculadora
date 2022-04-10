import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { KeyboardNumeric, Operations } from "../Mocks";

const App = () => {
  const [number, setNumber] = useState<any>(1);

  const inputNumber = ({ e }: any) => {
    let input = e.target.value;
    setNumber(number + input);
    console.log("foi");
  };
  const clear = () => {
    setNumber(0);
  };

  return (
    <div>
      <Input state={number} />
      <div>
        {KeyboardNumeric.map((numb) => (
          <Button
            onClick={inputNumber}
            value={numb.value}
            name={numb.keys_numb}
          />
        ))}
      </div>
      <div>
        <Button onClick={clear} name="AC" />
        {Operations.map((op) => (
          <Button onClick={() => {}} name={op.operation} value={op.value} />
        ))}
      </div>
    </div>
  );
};

export default App;
