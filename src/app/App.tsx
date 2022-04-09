import Button from "../components/Button";
import { KeyboardNumeric,Operations } from "../Mocks";

const App=()=> {
  return (
    <div style={{display:'flex',gap:'30px'}}> 
      <div>
       {KeyboardNumeric.map((numb)=>(<Button onClick={()=>{}} name={numb.keys_numb}/>))}
      </div>
      <div>
        {Operations.map((numb)=>(<Button onClick={()=>{}} name={numb.operation}/>))}
      </div>
    </div>
  );
}

export default App;
