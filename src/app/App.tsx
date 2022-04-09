import Button from "../components/Button";
import { KeyboardNumeric } from "../Mocks";

const App=()=> {
  return (
    <div >
      {KeyboardNumeric.map((numb)=>(<Button onClick={()=>{}} name={numb.keys_numb}/>))}
     {/* <Button onClick={()=>{}} name="teste"/> */}
    </div>
  );
}

export default App;
