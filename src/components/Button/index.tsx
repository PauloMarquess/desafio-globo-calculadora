interface ButtonProps {
  name: number | string;
  onClick: any;
  value?: number | string;
}

export const Button = ({ name, onClick, value }: ButtonProps) => {
  return (
    <div>
      <button value={value} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
