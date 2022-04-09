import Button from "../components/Button";
import Input from "../components/Input";
import { KeyboardNumeric, Operations } from "../Mocks";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
      <Input state={""} />
      <div>
        {KeyboardNumeric.map((numb) => (
          <Button onClick={() => {}} name={numb.keys_numb} />
        ))}
      </div>
      <div>
        {Operations.map((numb) => (
          <Button onClick={() => {}} name={numb.operation} />
        ))}
      </div>
    </div>
  );
};

export default App;
