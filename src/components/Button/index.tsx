interface ButtonProps {
  name: number | string;
  onClick: () => void;
}

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{name}</button>
    </div>
  );
};

export default Button;
