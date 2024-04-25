import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
  isActive?: boolean;
}

const ButtonAsideComponent: React.FC<ButtonProps> = ({ text, isActive, ...props }) => {
  return (
    <button
      {...props}
      className={
        isActive
          ? "capitalize w-full bg-white border-l-[3px] border-gold text-start rounded-r-[10px] py-[10px] px-[20px] text-black"
          : "capitalize w-full bg-opacity-10 bg-white text-start hover:bg-opacity-80 rounded-r-[10px] py-[10px] px-[20px] hover:border-l-[3px] hover:border-white hover:text-black hover:bg-gold"
      }
    >
      {text}
    </button>
  );
};

export default ButtonAsideComponent;
