import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({ children, type = "button", onClick }: IButton) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
};
