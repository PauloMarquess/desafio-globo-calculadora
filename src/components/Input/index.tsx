interface InputProps {
  state: any;
}

function Input({ state }: InputProps) {
  return (
    <div>
      <input placeholder={state} type="text" />
    </div>
  );
}

export default Input;
