import { CardButton } from "./style";

interface ButtonProps {
  name: number | string;
  onClick: any;
  value?: number | string;
}

export const Button = ({ name, onClick, value }: ButtonProps) => {
  return (
    <CardButton>
      <button value={value} onClick={onClick}>
        {name}
      </button>
    </CardButton>
  );
};

export default Button;
